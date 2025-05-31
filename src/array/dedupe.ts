/**
 * Remove duplicate items from an array.
 * Creates a new array with duplicate items removed.
 * Adapted from: (c) 2019 Chris Ferdinandi, MIT License
 * https://gomakethings.com
 *
 * @param arr - The input array.
 * @returns A new array with duplicates removed.
 * @example
 * // Remove duplicates from an array
 * const uniqueArray = dedupe([1, 2, 2, 3, 4, 4, 5]);
 * console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
 */
export function dedupe<T>(array: T[]): T[] {
  return array.filter((item, index) => (
      array.indexOf(item) === index
    )
  );
} 