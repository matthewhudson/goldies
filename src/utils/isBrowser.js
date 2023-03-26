/**
 * Determine if the code is running in a browser environment.
 *
 * @returns {boolean} True if running in a browser environment, false otherwise.
 * @example
 * // returns true if running in a browser, false if running in Node.js
 * const browserEnvironment = isBrowser();
 */
export const isBrowser = () => typeof window !== 'undefined'
