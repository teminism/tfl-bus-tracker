import express from 'express';
import { getStopsNearby, getBusArrivalsForStop, getStopRoutes, getStopDestinationsController, getTrainStationsController } from '../controllers/stopController';

const router = express.Router();

router.get('/nearby', getStopsNearby);
router.get('/:stopId/routes', getStopRoutes);
router.get('/:stopId/destinations', getStopDestinationsController);
router.get('/:stopId/arrivals', getBusArrivalsForStop);
router.get('/train-stations', getTrainStationsController);


export default router;
