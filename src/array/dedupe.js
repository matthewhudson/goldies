/**
 * Remove duplicate items from an array.
 * Creates a new array with duplicate items removed.
 * Adapted from: (c) 2019 Chris Ferdinandi, MIT License
 * https://gomakethings.com
 *
 * @param {Array} arr - The input array.
 * @returns {Array} A new array with duplicates removed.
 * @example
 * // Remove duplicates from an array
 * const uniqueArray = dedupe([1, 2, 2, 3, 4, 4, 5]);
 * console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
 */
export function dedupe (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
