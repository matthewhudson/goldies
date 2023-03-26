/**
 * Convert an HTML string to a DOM object.
 * Parses an HTML string and returns the first child element of the resulting DOM tree.
 *
 * @param {string} html - A raw HTML string.
 * @returns {Element} The first child element of the DOM tree generated from the input HTML string.
 * @example
 * // Convert an HTML string to a DOM object
 * const $el = domify('<p>example</p>');
 * console.log($el); // Output: <p>example</p>
 * console.log($el instanceof HTMLElement); // Output: true
 */
export function domify (html) {
  return new DOMParser().parseFromString(html, 'text/html').body.children[0]
}
