import request from 'supertest';
import app from './app';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
});

describe('Express API endpoints', () => {
  it('GET /api/stops/nearby should return stops for valid coordinates', async () => {
    const res = await request(app)
      .get('/api/stops/nearby')
      .query({ lat: 51.5081, lon: -0.1281 }); // Trafalgar Square
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.stopPoints) || Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/stops/nearby should return stops with expected fields', async () => {
  const res = await request(app)
    .get('/api/stops/nearby')
    .query({ lat: 51.5081, lon: -0.1281 });
  expect(res.status).toBe(200);
  const stops = res.body.stopPoints || res.body;
  if (Array.isArray(stops) && stops.length > 0) {
    const stop = stops[0];
    expect(stop).toHaveProperty('commonName');
    expect(stop).toHaveProperty('lat');
    expect(stop).toHaveProperty('lon');
    expect(stop).toHaveProperty('id');
  }
});

it('GET /api/stops/nearby should return 400 if missing parameters', async () => {
    const res = await request(app).get('/api/stops/nearby');
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('GET /api/stops/:stopId/arrivals should return arrivals for a valid stopId', async () => {
  const stopId = '490008660N'; // Trafalgar Square
  const res = await request(app).get(`/api/stops/${stopId}/arrivals`);
  expect([200, 429]).toContain(res.status);
  if (res.status === 200) {
    expect(Array.isArray(res.body)).toBe(true);
  } else if (res.status === 429) {
    expect(res.body).toHaveProperty('error');
  }
});

  it('GET /api/stops/:stopId/arrivals should return 404 if stopId is missing', async () => {
    const res = await request(app).get('/api/stops//arrivals');
    expect(res.status).toBe(404);
  });
});