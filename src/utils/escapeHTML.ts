/**
 * Map of special characters to their corresponding HTML entities.
 * @type {Object.<string, string>}
 */
const entityMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/**
 * Escape special characters in an HTML string.
 *
 * @param html - The HTML string to escape.
 * @returns The escaped HTML string.
 * @example
 * const html = '<div class="example">Hello & welcome!</div>';
 * // returns '&lt;div class=&quot;example&quot;&gt;Hello &amp; welcome!&lt;/div&gt;'
 * const escaped = escapeHTML(html);
 */
export const escapeHTML = (html: string): string => html.replace(/[&<>"']/g, (s) => entityMap[s]);
