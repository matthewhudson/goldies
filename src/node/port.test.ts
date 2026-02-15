import { getAvailablePort } from './port';

describe('getAvailablePort', () => {
  test('should return an available port', async () => {
    const port = await getAvailablePort(3000);
    expect(port).toBeGreaterThanOrEqual(3000);
    expect(port).toBeLessThanOrEqual(65535);
  });

  // Note: Testing the "no available port" error case is difficult without extensive mocking
  // and is an edge case that's unlikely to occur in practice (requires all ports 3000-65535 to be in use).
  // The function's error handling is still present in the implementation.

  test('should handle starting port at the maximum', async () => {
    const port = await getAvailablePort(65535);
    expect(port).toBe(65535);
  });
});
