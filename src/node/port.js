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
    function objectValues (obj) {
      return Object.keys(obj).map(key => obj[key])
    }

    function objectEntries (obj) {
      if (obj == null) {
        throw new TypeError()
      }

      const entries = []

      for (const key in obj) {
        if (
          obj.hasOwnProperty(key) &&
          Object.prototype.propertyIsEnumerable.call(obj, key)
        ) {
          entries.push([key, obj[key]])
        }
      }

      return entries
    }
  }

  return new Promise(resolve => {
    getNextAvailablePort(startingAt, resolve)
  })
}
