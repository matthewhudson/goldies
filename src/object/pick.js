/**
 * Creates a new object composed of properties picked from another object.
 *
 * @param {Object} obj - The object to pick properties from.
 * @param {Array<string>} props - An array of property names to use.
 * @returns {Object} - The new object.
 * @example
 *
 * const sourceObj = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 *
 * const pickedObj = pick(sourceObj, ['a', 'c'])
 *
 * // pickedObj is now { a: 1, c: 3 }
 */
export function pick (obj, props) {
  if (!obj || !props) return

  const picked = {}

  for (const prop of props) {
    picked[prop] = obj[prop]
  }

  return picked
}
