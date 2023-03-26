/**
 * Get the URL parameters from a given URL string.
 *
 * @param {string} url - The URL to extract parameters from.
 * @returns {Object} The URL parameters as key-value pairs.
 * @example
 * const url = 'https://example.com?param1=value1&param2=value2';
 * // returns { param1: 'value1', param2: 'value2' }
 * const params = getUrlParams(url);
 */
export function getURLParams (url) {
  const params = new URLSearchParams(new URL(url).search)

  return Object.fromEntries(
    Array.from(params.entries()).map(([key, value]) => [decodeURIComponent(key), decodeURIComponent(value)])
  )
}
