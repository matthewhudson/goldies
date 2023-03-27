/**
 * Create a new object composed of properties that meet specific criteria.
 *
 * @param {Object} obj - The original object.
 * @param {Function} callback - The callback test to run.
 * @returns {Object} - The new, filtered object.
 */
export function filter (obj, callback) {
  /**
   * A new object that will hold properties that pass the given test.
   * @type {Object}
   */
  const filtered = {}

  // Loop through each item in the object and test it
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // If the callback validates true, push item to the new object
      if (callback(obj[key], key, obj)) {
        filtered[key] = obj[key]
      }
    }
  }

  // Return the new object
  return filtered
}
