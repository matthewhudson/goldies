/**
 * Check if a string ends with a specified substring, case-insensitive.
 *
 * @param str - The string to check.
 * @param ends - The substring to check if it's at the end of the string.
 * @returns True if the string ends with the specified substring, false otherwise.
 * @example
 * // returns true
 * const result = endsWith('JavaScript', 'script');
 */
export const endsWith = (str: string, ends: string): boolean =>
  str.toLowerCase().lastIndexOf(ends.toLowerCase()) === str.length - ends.length;
