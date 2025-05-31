/**
 * Create a new object composed of properties that meet specific criteria.
 *
 * @param obj - The original object.
 * @param callback - The callback test to run.
 * @returns The new, filtered object.
 * @example
 * const original = { a: 1, b: 2, c: 3 };
 * const filtered = filter(original, (value) => value > 1);
 * console.log(filtered); // { b: 2, c: 3 }
 */
export function filter<T extends Record<string, any>>(
  obj: T,
  callback: (value: T[keyof T], key: keyof T, obj: T) => boolean
): Partial<T> {
  /**
   * A new object that will hold properties that pass the given test.
   * @type {Partial<T>}
   */
  const filtered: Partial<T> = {};

  // Loop through each item in the object and test it
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // If the callback validates true, push item to the new object
      if (callback(obj[key], key, obj)) {
        filtered[key] = obj[key];
      }
    }
  }

  // Return the new object
  return filtered;
}
