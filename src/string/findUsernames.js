/**
 * Searches and returns a string for any social accounts
 * Adapted from: https://stackoverflow.com/questions/15265605/how-to-pull-mentions-out-of-strings-like-twitter-in-javascript
 * Full/Official version: https://github.com/twitter/twitter-text
 * @example
 * const haystack = '@troy what is up man? Are you hanging out with @abed'
 * const users = findUsernames(haystack) // ['@troy', '@abed']
 * @param {String} haystack the text to search
 * @returns {Array} zero or more usernames
 */
export const findUsernames = haystack => {
  const NEEDLE = /\B@[a-z0-9_-]+/gi
  const matches = haystack.match(NEEDLE)
  return matches || []
}
