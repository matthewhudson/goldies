// Where we stash our stuff
var cache = []

function cleanCache() {
  const ttl_check = Date.now() - ttl
  cache.forEach((val, i) => {
    if ( val.t < ttl_check ) {
      delete cache[i]
    }
  })
}
// Setup a cache buster so our cache doesn't use all the memory
const ttl = 20 * 60 * 1000 // 20 mins -> microseconds
const cacheCheckInterval = 5 * 60 * 1000 // 5 mins -> microseconds
setInterval(cleanCache, cacheCheckInterval)

const dat = {t: Date.now(), r: 'foo'}
console.log(dat.t, dat.r)
cache.push(dat)
