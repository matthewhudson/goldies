/**
 * Build a query string from an object of data.
 *
 * @param {Object} data - The data to turn into a query string.
 * @returns {string} The query string.
 * @example
 * const data = { param1: 'value1', param2: 'value2' };
 * // returns 'param1=value1&param2=value2'
 * const queryString = buildQuery(data);
 */
export function buildQuery (data) {
  if (typeof data === 'string') return data

  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}
