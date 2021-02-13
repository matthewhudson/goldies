/**
 * Convert HTML string to DOM object.
 * @example
 * const $el = domify('<p>example</p>')
 * @param {String} html
 * @returns {Node}
 */
export default function domify (html) {
  return new DOMParser().parseFromString(html, 'text/html').body.firstNode
}
