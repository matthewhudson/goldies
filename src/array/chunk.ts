/**
 * Splits an array into chunks of a given size.
 *
 * The last chunk is shorter when the array doesn't divide evenly. The input array isn't
 * changed.
 *
 * @param array - The array to split.
 * @param size - The length of each chunk: a positive integer.
 * @returns The chunks, in order.
 * @throws {RangeError} If `size` isn't a positive integer.
 * @example
 * chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
 *
 * // Send at most 100 records per request
 * for (const batch of chunk(records, 100)) {
 *   await save(batch);
 * }
 */
export function chunk<T>(array: readonly T[], size: number): T[][] {
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError(`Chunk size must be a positive integer, got ${size}`);
  }

  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
