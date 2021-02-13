/**
 * @function
 * @name setFilter
 * @description
 * @export
 * Note: Inspired by `atom-ide-ui/modules/nuclide-commons/collection.js`
 * @see {@link http://github.com|GitHub}
 *
 * @example
 * function setIntersect(a, b) {
 *   return setFilter(a, e => b.has(e))
 * }
 *
 * @param {Set} set
 * @param {Function} predicate
 * @returns {Set}
 */
export default function setFilter (set, predicate) {
  const filtered = new Set()

  for (const item of set) {
    if (predicate(item)) {
      filtered.add(item)
    }
  }

  return filtered
}
