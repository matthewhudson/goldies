/**
 * Safely verifies input argument is valid JSON.
 *
 * @param {*} data
 * @returns {Boolean}
 */
export const isJSON = data => {
  try {
    JSON.parse(data)
    return true
  } catch (e) {
    return false
  }
}
