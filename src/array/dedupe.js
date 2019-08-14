/**
 * Remove duplicate items from an array
 * Adapted from: (c) 2019 Chris Ferdinandi, MIT License
 * https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
export function dedupe (arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
