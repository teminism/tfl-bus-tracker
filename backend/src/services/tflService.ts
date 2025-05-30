import axios from 'axios';
import tfl from '../config/tfl';

export const getNearbyStops = async (lat: number, lon: number) => {
  const response = await tfl.get(`/StopPoint`, {
    params: {
      lat,
      lon,
      stopTypes: 'NaptanPublicBusCoachTram',
      radius: 500, // meters
      useStopPointHierarchy: true
    },
  });
  return response.data;
};

export const getBusArrivals = async (stopId: string): Promise<any[]> => {
  const url = `https://api.tfl.gov.uk/StopPoint/${stopId}/Arrivals?app_id=&app_key=${process.env.TFL_API_KEY}`;

  const response = await axios.get(url);
  return response.data.sort((a: { timeToStation: number; }, b: { timeToStation: number; }) => a.timeToStation - b.timeToStation);
};
