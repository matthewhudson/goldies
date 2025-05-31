/**
 * Return true, if target owns a property with the given key.
 *
 * @param target - The object to check.
 * @param key - The key to check for.
 * @returns True if the target owns the property with the given key, otherwise false.
 * @example
 * const obj = { a: 1, b: 2 };
 * has(obj, 'a'); // returns true
 * has(obj, 'c'); // returns false
 */
export function has(target: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(target, key);
}
