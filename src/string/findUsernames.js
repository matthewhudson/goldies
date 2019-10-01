/**
 * Searches and returns a string for any social accounts
 * Adapted from: https://stackoverflow.com/questions/15265605/how-to-pull-mentions-out-of-strings-like-twitter-in-javascript
 * Full/Official version: https://github.com/twitter/twitter-text
 * @example
 * const haystack = '@jpotts18 what is up man? Are you hanging out with @kyle_clegg'
 * const users = findUsernames(haystack) // ['@jpotts18', '@kyle_clegg']
 * @param {String} haystack the text to search
 * @returns {Array} zero or more usernames
 */
export const findUsernames = haystack => {
  const NEEDLE = /\B@[a-z0-9_-]+/gi
  const find = haystack => haystack.match(NEEDLE)
  return find(haystack)
}
