/**
 * Pause the execution of code for a specified duration.
 *
 * @param ms - The number of milliseconds to pause the execution.
 * @returns A Promise that resolves after the specified duration.
 * @example
 * async function example() {
 *   console.log('Start');
 *   await sleep(1000);
 *   console.log('After 1 second');
 * }
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
