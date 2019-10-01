/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
export const has = (target, key) => {
  return Object.prototype.hasOwnProperty.call(target, key)
}
