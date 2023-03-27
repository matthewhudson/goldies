import createServer from 'net'

/**
 * Finds an available port for listening.
 * @param {number} [startingAt=3000] - Port to begin scanning from.
 * @returns {Promise<number>} - Returns a Promise that resolves to an unused port.
 * @example
 * const port = await getAvailablePort(8080);
 * console.log(`${port} is available`);
 */
export async function getAvailablePort (startingAt = 3000) {
  /**
   * Find the next available port by creating a temporary server and checking for errors.
   * @param {number} currentPort - The port to start scanning from.
   * @returns {Promise<number>} - Returns a Promise that resolves to an unused port.
   */
  function getNextAvailablePort (currentPort) {
    return new Promise((resolve, reject) => {
      const server = createServer()

      server.once('error', (err) => {
        server.close(() => {
          reject(err)
        })
      })

      server.once('listening', () => {
        server.close(() => {
          resolve(currentPort)
        })
      })

      server.listen(currentPort)
    })
  }

  let port = startingAt
  while (port <= 65535) {
    try {
      await getNextAvailablePort(port)
      return port
    } catch (err) {
      port++
    }
  }

  throw new Error('No available port found.')
}
