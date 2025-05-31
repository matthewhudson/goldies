/**
 * Checks if a value is defined.
 *
 * @example
 * if (isDefined(myVar)) {
 *   // myVar is defined
 * }
 *
 * @param obj - The value to check.
 * @returns Whether or not the value is defined.
 */
export function isDefined<T>(obj: T | undefined): obj is T {
  return obj !== undefined;
} 