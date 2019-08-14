/**
 * Safely verifies input argument is valid JSON.
 *
 * @param {*} data
 * @returns {Boolean}
 */
export const isValidJSON = data => {
  try {
    JSON.parse(data)
    return true
  } catch (e) {
    return false
  }
}
