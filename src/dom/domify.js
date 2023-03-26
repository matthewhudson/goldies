/**
 * Convert HTML string to DOM object.
 * 
 * @example
 * const $el = domify('<p>example</p>')
 * 
 * @param {String} html - A raw HTML string.
 * @returns {HTMLDocument}
 */
export function domify(html) {
  return new DOMParser().parseFromString(html, "text/html").body.children[0];
}
