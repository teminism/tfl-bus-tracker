import { Request, Response } from 'express';
import { getNearbyStops, getBusArrivals } from '../services/tflService';
import { logError, logInfo } from '../utils/logger';

export const getStopsNearby = async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ error: 'Missing lat or lon' });
      return;
    }

    logInfo(`Fetching stops near lat=${lat}, lon=${lon}`);
    const stops = await getNearbyStops(Number(lat), Number(lon));
    res.json(stops);
  } catch (error) {
    logError('Error fetching nearby stops', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBusArrivalsForStop = async (req: Request, res: Response): Promise<void> => {
  try {
    const { stopId } = req.params;

    if (!stopId) {
      res.status(400).json({ error: 'Missing stopId' });
      return;
    }

    const arrivals = await getBusArrivals(stopId);
    res.json(arrivals);
  } catch (error: any) {
    if (error.response && error.response.status === 429) {
      logError('Rate limited by TFL API', error);
      res.status(429).json({ error: 'Too many requests to TFL API' });
      return;
    }
    logError('Error fetching arrivals', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

