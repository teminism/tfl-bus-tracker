import { Request, Response } from 'express';
import { getNearbyStops, getBusArrivals, getStopLines, getStopDestinations, getTrainStations } from '../services/tflService';
import { logError, logInfo } from '../utils/logger';

// This controller handles requests related to bus stops, including fetching nearby stops, stop routes, and bus arrivals.
export const getStopsNearby = async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ error: 'Missing lat or lon' });
      return;
    }

    logInfo(`Fetching stops near lat=${lat}, lon=${lon}`);
    const stops = await getNearbyStops(Number(lat), Number(lon));
    res.json({ stopPoints: stops });
  } catch (error) {
    logError('Error fetching nearby stops', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// This controller fetches the routes for a specific bus stop by its ID.
export const getStopRoutes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { stopId } = req.params;
    if (!stopId) {
      res.status(400).json({ error: 'Missing stopId' });
      return;
    }
    const lines = await getStopLines(stopId); 
    res.json({ lines }); 
  } catch (error) {
    logError('Error fetching stop lines', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// This controller fetches the desitination for a specific stop by its ID.
export const getStopDestinationsController = async (req: Request, res: Response) => {
  try {
    const { stopId } = req.params;
    if (!stopId) {
      res.status(400).json({ error: 'Missing stopId' });
      return;
    }
    const destinations = await getStopDestinations(stopId);
    res.json({ destinations });
  } catch (error) {
    logError('Error fetching stop destinations', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// This controller fetches the next bus arrivals for a specific stop by its ID.
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

export const getTrainStationsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lon, radius } = req.query;

    if (!lat || !lon) {
      res.status(400).json({ error: 'Missing lat or lon' });
      return;
    }

    const stations = await getTrainStations(Number(lat), Number(lon), radius ? Number(radius) : 500);
    res.json({ stations });
  } catch (error) {
    logError('Error fetching train stations', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};