/**
 * Convert HTML string to DOM object.
 * 
 * @example
 * const $el = domify('<p>example</p>')
 * 
 * @param {String} html - A raw HTML string.
 * @returns {Node}
 */
export function domify(html) {
  return new DOMParser().parseFromString(html, "text/html").body.firstNode;
}
