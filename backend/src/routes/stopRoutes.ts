import express from 'express';
import { getStopsNearby, getBusArrivalsForStop } from '../controllers/stopController';

const router = express.Router();

router.get('/nearby', getStopsNearby);
router.get('/:stopId/arrivals', getBusArrivalsForStop);


export default router;
