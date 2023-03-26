/**
 * Map of special characters to their corresponding HTML entities.
 * @type {Object.<string, string>}
 */
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Escape special characters in an HTML string.
 *
 * @param {string} html - The HTML string to escape.
 * @returns {string} The escaped HTML string.
 * @example
 * const html = '<div class="example">Hello & welcome!</div>';
 * // returns '&lt;div class=&quot;example&quot;&gt;Hello &amp; welcome!&lt;/div&gt;'
 * const escaped = escapeHTML(html);
 */
export const escapeHTML = html => html.replace(/[&<>"']/g, s => entityMap[s])
