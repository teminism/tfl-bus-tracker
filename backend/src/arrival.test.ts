import axios from 'axios';
import request from 'supertest';
import app from './app';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

jest.mock('axios');

const mockArrivals = [
  {
    "id": "123456789",
    "operationType": 1,
    "vehicleId": "TF123",
    "naptanId": "490008660N",
    "stationName": "Trafalgar Square",
    "lineId": "9",
    "lineName": "9",
    "platformName": "A",
    "direction": "inbound",
    "bearing": "180",
    "destinationNaptanId": "490000077W",
    "destinationName": "Hammersmith",
    "timestamp": "2025-05-30T17:00:00Z",
    "timeToStation": 120,
    "currentLocation": "Piccadilly Circus",
    "towards": "Hammersmith",
    "expectedArrival": "2025-05-30T17:02:00Z",
    "timeToLive": "2025-05-30T17:02:30Z",
    "modeName": "bus",
    "scheduledArrival": "2025-05-30T17:02:00Z"
  },
  {
    "id": "987654321",
    "operationType": 1,
    "vehicleId": "TF456",
    "naptanId": "490008660N",
    "stationName": "Trafalgar Square",
    "lineId": "15",
    "lineName": "15",
    "platformName": "B",
    "direction": "outbound",
    "bearing": "270",
    "destinationNaptanId": "490000123X",
    "destinationName": "Blackwall",
    "timestamp": "2025-05-30T17:01:00Z",
    "timeToStation": 180,
    "currentLocation": "Strand",
    "towards": "Blackwall",
    "expectedArrival": "2025-05-30T17:04:00Z",
    "timeToLive": "2025-05-30T17:04:30Z",
    "modeName": "bus",
    "scheduledArrival": "2025-05-30T17:04:00Z"
  },
  {
    "id": "567891234",
    "operationType": 1,
    "vehicleId": "TF789",
    "naptanId": "490008660N",
    "stationName": "Trafalgar Square",
    "lineId": "3",
    "lineName": "3",
    "platformName": "C",
    "direction": "inbound",
    "bearing": "90",
    "destinationNaptanId": "490000456Y",
    "destinationName": "Oxford Circus",
    "timestamp": "2025-05-30T17:03:00Z",
    "timeToStation": 240,
    "currentLocation": "Embankment",
    "towards": "Oxford Circus",
    "expectedArrival": "2025-05-30T17:07:00Z",
    "timeToLive": "2025-05-30T17:07:30Z",
    "modeName": "bus",
    "scheduledArrival": "2025-05-30T17:07:00Z"
  }
];

describe('Express API endpoints', () => {
  beforeEach(() => {
    (axios.get as jest.Mock).mockReset();
  });

  describe('GET /api/stops/:stopId/arrivals', () => {
    it('should return arrivals for a valid stopId', async () => {
      // Mock the axios response
      (axios.get as jest.Mock).mockResolvedValue({ 
        status: 200, 
        data: mockArrivals 
      });

      const stopId = '490008660N'; // Trafalgar Square
      const res = await request(app).get(`/api/stops/${stopId}/arrivals`);
      
      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(3);
      expect(res.body[0].lineName).toBe('9');
      expect(res.body[1].destinationName).toBe('Blackwall');
    });

    it('should handle API errors', async () => {
      // Mock an error response
      (axios.get as jest.Mock).mockRejectedValue({
        response: {
          status: 500,
          data: { message: 'Internal Server Error' }
        }
      });

      const stopId = '490008660N';
      const res = await request(app).get(`/api/stops/${stopId}/arrivals`);
      
      expect(res.status).toBe(500);
      expect(res.body.error).toBeDefined();
    });

    it('should handle rate limiting (429)', async () => {
      // Mock rate limit response
      (axios.get as jest.Mock).mockRejectedValue({
        response: {
          status: 429,
          data: { message: 'Too many requests' }
        }
      });

      const stopId = '490008660N';
      const res = await request(app).get(`/api/stops/${stopId}/arrivals`);
      
      expect(res.status).toBe(429);
      expect(res.body.error).toMatch(/too many requests/i);
    });
  });
});
