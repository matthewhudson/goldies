/**
 * Creates a new object composed of properties picked from another object.
 *
 * @param obj - The object to pick properties from.
 * @param props - An array of property names to use.
 * @returns The new object.
 * @example
 *
 * const sourceObj = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 *
 * const pickedObj = pick(sourceObj, ['a', 'c'])
 *
 * // pickedObj is now { a: 1, c: 3 }
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  props: K[]
): Pick<T, K> {
  if (!obj || !props) return {} as Pick<T, K>;

  const picked: Partial<T> = {};

  for (const prop of props) {
    picked[prop] = obj[prop];
  }

  return picked as Pick<T, K>;
}
