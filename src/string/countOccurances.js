/**
 * Count the number of occurrences of `char` in `str`.
 * `char` must be a string of length 1.
 */

function countOccurrences (haystack, char) {
  if (!(char.length === 1)) {
    throw new Error('char must be a string of length 1')
  }

  let count = 0
  const code = char.charCodeAt(0)

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.charCodeAt(i) === code) {
      count++
    }
  }

  return count
}
