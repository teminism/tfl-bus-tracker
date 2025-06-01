import express from 'express';
import { getStopsNearby, getBusArrivalsForStop, getStopRoutes, getStopDestinationsController } from '../controllers/stopController';

const router = express.Router();

router.get('/nearby', getStopsNearby);
router.get('/:stopId/routes', getStopRoutes);
router.get('/:stopId/destinations', getStopDestinationsController);
router.get('/:stopId/arrivals', getBusArrivalsForStop);


export default router;
