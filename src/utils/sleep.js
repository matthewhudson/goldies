/**
 * Pause the execution of code for a specified duration.
 *
 * @param {number} ms - The number of milliseconds to pause the execution.
 * @returns {Promise} A Promise that resolves after the specified duration.
 * @example
 * async function example() {
 *   console.log('Start');
 *   await sleep(1000);
 *   console.log('After 1 second');
 * }
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
