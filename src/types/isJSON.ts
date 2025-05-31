/**
 * Safely verifies input argument is valid JSON.
 *
 * @example
 * const validJSON = '{"name": "John", "age": 30}'
 * const invalidJSON = '{name: "John", age: 30}'
 *
 * console.log(isJSON(validJSON)) // true
 * console.log(isJSON(invalidJSON)) // false
 *
 * @param {*} data - The data to check if it is valid JSON.
 * @returns {Boolean} - A boolean indicating if the data is valid JSON or not.
 */
export const isJSON = (data): boolean => {
  // If it's not a string, we return false immediately since we know it can't be valid JSON.
  if (typeof data !== 'string') {
    return false
  }

  try {
    JSON.parse(data)
    return true
  } catch {
    return false
  }
}
