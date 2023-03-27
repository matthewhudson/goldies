/**
 * Creates an immutable clone of an object.
 *
 * @param {Object} obj - The object to clone.
 * @returns {Object} - The clone of the object.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 *
 * const cloned = clone(original);
 *
 * cloned.a = 3;
 * cloned.b.c = 4;
 *
 * console.log(original); // { a: 1, b: { c: 2 } }
 * console.log(cloned);   // { a: 3, b: { c: 4 } }
 */
export function clone (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  const clonedObj = Array.isArray(obj) ? [] : {}

  for (const [key, value] of Object.entries(obj)) {
    clonedObj[key] = clone(value)
  }

  return Object.freeze(clonedObj)
}
