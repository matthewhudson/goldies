/**
 * Creates a deep, frozen clone of an object.
 *
 * Plain objects and arrays are copied recursively and frozen. Dates, Maps and Sets
 * are copied too (Map and Set contents recursively), but freezing does not stop
 * their own methods, such as `setTime` or `set`, from changing them.
 *
 * @param obj - The object to clone.
 * @returns The clone of the object.
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 *
 * const cloned = clone(original);
 *
 * console.log(cloned);                    // { a: 1, b: { c: 2 } }
 * console.log(cloned.b === original.b);   // false
 * console.log(Object.isFrozen(cloned.b)); // true, so `cloned.b.c = 4` throws in strict mode
 */
export function clone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return Object.freeze(new Date(obj.getTime())) as T;
  }

  if (obj instanceof Map) {
    // Keys stay as-is so lookups by reference keep working
    return Object.freeze(new Map(Array.from(obj, ([key, value]) => [key, clone(value)]))) as T;
  }

  if (obj instanceof Set) {
    return Object.freeze(new Set(Array.from(obj, (value) => clone(value)))) as T;
  }

  const clonedObj: Record<string, unknown> = Array.isArray(obj)
    ? ([] as unknown as Record<string, unknown>)
    : {};

  for (const [key, value] of Object.entries(obj)) {
    clonedObj[key] = clone(value);
  }

  return Object.freeze(clonedObj) as T;
}
