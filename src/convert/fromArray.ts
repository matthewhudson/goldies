/**
 * Converts an array to a comma-separated string.
 *
 * @param arr - The input array.
 * @returns The comma-separated string or undefined if the input is not an array.
 * @example
 * const inputArray = ['a', 'b', 'c'];
 * const result = fromArray(inputArray); // 'a,b,c'
 */
export function fromArray<T>(arr: T[]): string | undefined {
  return Array.isArray(arr) ? arr.toString() : undefined;
}
