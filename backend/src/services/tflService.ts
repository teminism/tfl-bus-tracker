import axios from 'axios';
import tfl from '../config/tfl';

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
  const url = `https://api.tfl.gov.uk/StopPoint/${stopId}/Arrivals?app_id=&app_key=${process.env.TFL_API_KEY}`;

  const response = await axios.get(url);
  return response.data.sort((a: { timeToStation: number; }, b: { timeToStation: number; }) => a.timeToStation - b.timeToStation);
};
