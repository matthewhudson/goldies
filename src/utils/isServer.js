/**
 * Determine if the code is running in a server (non-browser) environment.
 *
 * @returns {boolean} True if running in a server environment, false otherwise.
 * @example
 * // returns true if running in Node.js, false if running in a browser
 * const serverEnvironment = isServer();
 */
export const isServer = () => typeof window === 'undefined'
