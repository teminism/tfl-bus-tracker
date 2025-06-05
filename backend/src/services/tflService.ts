import axios from 'axios';
import tfl from '../config/tfl';
import 'dotenv/config';

// This function retrieves the list of all nearby bus stops
export const getNearbyStops = async (lat: number, lon: number) => {
  const response = await tfl.get(`/StopPoint`, {
    params: {
      lat,
      lon,
      stopTypes: 'NaptanPublicBusCoachTram',
      radius: 500,
      useStopPointHierarchy: true,
    },
  });

  const stopPoints = response.data.stopPoints || [];

  return stopPoints.map((stop: any) => {
    const towards = stop.additionalProperties?.find(
      (prop: any) => prop.key === 'Towards'
    )?.value;

    return {
      naptanId: stop.naptanId,
      commonName: stop.commonName,
      stopLetter: stop.stopLetter,
      indicator: stop.indicator,
      lines: stop.lines?.map((line: any) => line.name) || [],
      towards,
      lat: stop.lat,
      lon: stop.lon,
      distance: stop.distance,
    };
  });
};


// This function retrieves the lines that serve a specific stop
export const getStopLines = async (stopId: string) => {
  const response = await tfl.get(`/StopPoint/${stopId}`);
  return response.data.lines;
};

// This function retrieves unique destinations ("towards") for all lines at a stop
export const getStopDestinations = async (stopId: string): Promise<{ lineId: string, lineName: string, towards: string }[]> => {
  const response = await tfl.get(`/StopPoint/${stopId}/Arrivals`);

  // Group by lineId and towards
  const destinationsMap = new Map<string, { lineId: string, lineName: string, towards: string }>();

  response.data.forEach((arrival: any) => {
    const key = `${arrival.lineId}|${arrival.towards}`;
    if (!destinationsMap.has(key)) {
      destinationsMap.set(key, {
        lineId: arrival.lineId,
        lineName: arrival.lineName,
        towards: arrival.towards,
      });
    }
  });

  return Array.from(destinationsMap.values());
};

// This function retrieves the next bus arrivals for a specific stop
export const getBusArrivals = async (stopId: string): Promise<any[]> => {
  // This will include credentials from config/tfl.ts
  const response = await tfl.get(`/StopPoint/${stopId}/Arrivals`);
  return response.data
    .sort((a: any, b: any) => a.timeToStation - b.timeToStation)
    .map((arrival: any) => ({
      ...arrival,
      minutesToArrival: Math.floor(arrival.timeToStation / 60),
    }));
};

// This fuction retrieves the train station list and full details for each station
export const getTrainStations = async (lat: number, lon: number) => {
  try {
    // Validate inputs
    if (isNaN(lat) || isNaN(lon)) {
      throw new Error(`Invalid coordinates: lat=${lat}, lon=${lon}`);
    }

    // Try different station type combinations
    const attempts = [
      'NaptanRailStation',
      'NaptanMetroStation',         
    ];

    const allStations: Record<string, any> = {}; 

    for (const stopTypes of attempts) {
      try {
        const response = await tfl.get('/StopPoint', {
          params: {
            lat,
            lon,
            stopTypes,
            radius: 1000,
          },
          timeout: 5000
        });

        console.log('Response:', response.data);


        const stopPoints = Array.isArray(response.data.stopPoints) ? response.data.stopPoints : [];

        for (const station of stopPoints) {
          allStations[station.id] = {
            id: station.id,
            name: station.commonName,
            distance: station.distance,
            modes: (station.modes || []).filter((mode: string) => mode !== 'bus'),
            lines: (station.lines || [])
              .map((line: any) => line.name)
              .filter((name: string) => isNaN(Number(name))),
          };
        }
      } catch (error: any) {
        console.warn(`Attempt failed with ${stopTypes}:`, error.message);
        // Continue to next attempt
      }
    }

    return Object.values(allStations).sort((a: any, b: any) => a.distance - b.distance);

  } catch (error: any) {
    console.error('Final TfL API Error:', {
      status: error.response?.status,
      url: error.config?.url,
      params: error.config?.params
    });
    return [];
  }
};