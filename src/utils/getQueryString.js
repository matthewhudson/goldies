import { getURLParams } from './getURLParams'

/**
 * Get the value of a query string from a URL.
 *
 * @param {string} field - The field to get the value of.
 * @param {string} [url=window.location.href] - The URL to get the value from (optional).
 * @returns {string|null} The value of the query string or null if not found.
 * @example
 * const url = 'https://example.com?param1=value1&param2=value2';
 * // returns 'value1'
 * const value = getQueryString('param1', url);
 */
export function getQueryString (field, url = window.location.href) {
  const params = getURLParams(url)
  return params[field] || null
}
