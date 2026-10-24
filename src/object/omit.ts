/**
 * Creates a copy of an object without the given properties: the opposite of `pick`.
 *
 * The copy is shallow, so nested objects are shared with the original, which isn't changed.
 *
 * @param obj - The object to copy.
 * @param keys - The properties to leave out.
 * @returns The new object.
 * @example
 * const user = { id: 1, name: 'Ada', password: 'hunter2' };
 *
 * omit(user, ['password']); // { id: 1, name: 'Ada' }
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: readonly K[]): Omit<T, K> {
  const result: Partial<T> = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result as Omit<T, K>;
}
