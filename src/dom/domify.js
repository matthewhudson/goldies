/**
 * Convert HTML string to DOM object. 
 * @example
 * const $el = domify('<p>example</p>')
 * @param {String} html
 * @returns {Node}
 */
export const domify = html =>
  new DOMParser().parseFromString(html, 'text/html').body.firstNode
