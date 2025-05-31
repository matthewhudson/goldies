/**
 * Searches and returns a string for any social accounts.
 * Adapted from: https://stackoverflow.com/questions/15265605/how-to-pull-mentions-out-of-strings-like-twitter-in-javascript
 * Full/Official version: https://github.com/twitter/twitter-text
 *
 * @param haystack - The text to search.
 * @returns An array of zero or more usernames.
 * @example
 * const haystack = '@troy what is up man? Are you hanging out with @abed';
 * const users = findUsernames(haystack); // ['@troy', '@abed']
 */
export const findUsernames = (haystack: string): string[] => {
  const NEEDLE: RegExp = /\B@[a-z0-9_-]+/gi;
  const matches: RegExpMatchArray | null = haystack.match(NEEDLE);
  return matches || [];
};
