/**
 * Convert HTML string to valid DOM object.
 *
 * @param {String} html
 * @returns {NodeList}
 */
export const domify = html =>
  new DOMParser().parseFromString(html, 'text/html').body.childNodes
