/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * isNil(null);
 * // => true
 *
 * isNil(undefined);
 * // => true
 *
 * isNil(NaN);
 * // => false
 */
export const isNil = (value: unknown): boolean => value == null
