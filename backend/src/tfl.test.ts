import tfl from './config/tfl';

describe('TFL API Integration', () => {
  it('should connect to the TFL API (health check)', async () => {
    const response = await tfl.get('/Line/Mode/bus/Status');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  it('should retrieve nearby stops with correct fields', async () => {
    // Example coordinates: Trafalgar Square, London
    const lat = 51.5081;
    const lon = -0.1281;
    const response = await tfl.get('/StopPoint', {
      params: {
        lat,
        lon,
        stopTypes: 'NaptanPublicBusCoachTram',
        radius: 200,
      },
    });
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data.stopPoints)).toBe(true);
    if (response.data.stopPoints.length > 0) {
      const stop = response.data.stopPoints[0];
      expect(stop).toHaveProperty('commonName');
      expect(stop).toHaveProperty('lat');
      expect(stop).toHaveProperty('lon');
      expect(stop).toHaveProperty('id');
    }
  });

  it('should retrieve arrivals for a stop', async () => {
    // Example stopId: "490008660N" (Trafalgar Square)
    const stopId = '490008660N';
    const response = await tfl.get(`/StopPoint/${stopId}/Arrivals`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    if (response.data.length > 0) {
      const arrival = response.data[0];
      expect(arrival).toHaveProperty('lineName');
      expect(arrival).toHaveProperty('destinationName');
      expect(arrival).toHaveProperty('timeToStation');
    }
  });
});