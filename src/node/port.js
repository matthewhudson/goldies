/**
 * Get a port available for listening.
 * @example Can be used as promise:
 * getAvailablePort(8080).then(port => {
 *   console.log(`${port} is available`)
 * }
 * @example Or with async/await:
 * async function () {
 *   const port = await getAvailablePort(8080)
 * }
 * @param {Number} [startingAt=3000] Port to begin scanning from.
 * @returns {Number} Returns a unused port.
 */
export default function getAvailablePort (startingAt = 3000) {
  function getNextAvailablePort (currentPort, cb) {
    const server = net.createServer()
    server.listen(currentPort, _ => {
      server.once('close', _ => {
        cb(currentPort)
      })
      server.close()
    })
    server.on('error', _ => {
      getNextAvailablePort(++currentPort, cb)
    })
  }

  return new Promise(resolve => {
    getNextAvailablePort(startingAt, resolve)
  })
}
