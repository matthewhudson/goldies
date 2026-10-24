/**
 * Determines if a haystack string starts with a specified needle substring, case-insensitive.
 *
 * @param haystack - The main string to check.
 * @param needle - The substring to check if the main string starts with.
 * @returns True if the main string starts with the specified substring, false otherwise.
 * @example
 * const haystack = 'Hello, world!';
 * startsWith(haystack, 'hello'); // returns true
 *
 * @deprecated Use the built-in `startsWith`, lowercasing both strings for the same case-insensitive
 * check: `haystack.toLowerCase().startsWith(needle.toLowerCase())`. Will be removed in goldies 6.0.
 */
export const startsWith = (haystack: string, needle: string): boolean =>
  haystack.toLowerCase().indexOf(needle.toLowerCase()) === 0;
