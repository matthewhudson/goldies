import { createServer } from 'net';

/**
 * Finds an available port for listening.
 *
 * @param startingAt - Port to begin scanning from (default: 3000).
 * @returns A Promise that resolves to an unused port number.
 * @throws If no available port is found in the range 3000-65535.
 * @example
 * const port = await getAvailablePort(8080);
 * console.log(`${port} is available`);
 */
export async function getAvailablePort(startingAt: number = 3000): Promise<number> {
  /**
   * Find the next available port by creating a temporary server and checking for errors.
   * @param currentPort - The port to start scanning from.
   * @returns A Promise that resolves to an unused port number.
   */
  function getNextAvailablePort(currentPort: number): Promise<number> {
    return new Promise((resolve, reject) => {
      const server = createServer();

      server.once('error', (err: Error) => {
        server.close(() => {
          reject(err);
        });
      });

      server.once('listening', () => {
        server.close(() => {
          resolve(currentPort);
        });
      });

      server.listen(currentPort);
    });
  }

  let port = startingAt;
  while (port <= 65535) {
    try {
      await getNextAvailablePort(port);
      return port;
    } catch (err) {
      port++;
    }
  }

  throw new Error('No available port found.');
}
