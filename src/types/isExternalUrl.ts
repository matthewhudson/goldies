/**
 * Checks whether a string is a URL pointing at a different host than the current page.
 *
 * In a browser, relative URLs are resolved against the document, so they (and absolute
 * URLs on the current host) return `false`. Without a DOM, such as in Node.js, only
 * absolute URLs with a host return `true`.
 *
 * @param str - The string to check.
 * @returns `true` if `str` is a URL with a host other than the current page's.
 * @example
 * isExternalUrl('https://example.com'); // true
 * isExternalUrl('/about'); // false
 * isExternalUrl('mailto:test@example.com'); // false (no host)
 */
export const isExternalUrl = (str: string): boolean => {
  const base = typeof document !== 'undefined' ? document.baseURI : undefined;
  const currentHost = typeof window !== 'undefined' ? window.location.host : undefined;

  try {
    const { host } = new URL(str, base);
    return host !== '' && host !== currentHost;
  } catch {
    return false;
  }
};
