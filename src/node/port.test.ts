import { getAvailablePort } from './port';
import * as net from 'net';
import { vi } from 'vitest';

describe.skip('getAvailablePort', () => {
  test('should return an available port', async () => {
    const port = await getAvailablePort(3000);
    expect(port).toBeGreaterThanOrEqual(3000);
    expect(port).toBeLessThanOrEqual(65535);
  });

  test('should throw an error if no port is available', async () => {
    // Mock the server to always throw an error
    const createServerSpy = vi.spyOn(net, 'createServer').mockImplementation(() => {
      const server = new net.Server();
      server.once = ((event: string, listener: (...args: unknown[]) => void): net.Server => {
        if (event === 'error') {
          listener(new Error('Port in use'));
        }
        return server;
      }) as typeof server.once;
      server.close = (callback?: (err?: Error) => void): net.Server => {
        if (callback) callback();
        return server;
      };
      server.listen = (): net.Server => server;
      return server;
    });

    await expect(getAvailablePort(65535)).rejects.toThrow('No available port found.');

    // Restore the original function
    createServerSpy.mockRestore();
  });

  test('should handle starting port at the maximum', async () => {
    const port = await getAvailablePort(65535);
    expect(port).toBe(65535);
  });
});
