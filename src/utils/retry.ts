/** Options for {@link retry}. */
export interface RetryOptions {
  /** How many times to call the function in total, including the first. Defaults to 3. */
  attempts?: number;
  /** How long to wait before the first retry, in milliseconds. Defaults to 1000. */
  delay?: number;
  /**
   * What to multiply the wait by after each retry. Defaults to 2: with the default delay,
   * waits of 1s, 2s, 4s... Use 1 for a fixed delay.
   */
  factor?: number;
  /**
   * Stops retrying when aborted: `retry` rejects with the signal's reason, and doesn't start
   * another attempt. To also cancel the attempt in progress, pass the same signal to the
   * work itself, such as `fetch`.
   */
  signal?: AbortSignal;
  /**
   * Decides whether an error is worth retrying, such as a network failure but not a 404.
   * Defaults to retrying every error.
   */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
}

// Like sleep, but rejects with the abort reason as soon as `signal` aborts
function wait(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    // Aborted while the attempt ran: the abort event has already fired
    if (signal?.aborted) {
      reject(signal.reason);
      return;
    }
    const onAbort = (): void => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort);
      resolve();
    }, ms);
    signal?.addEventListener('abort', onAbort, { once: true });
  });
}

/**
 * Calls a function until it succeeds, waiting longer between each attempt (exponential
 * backoff).
 *
 * @param fn - The work to retry. It gets the attempt number, starting at 1, and can return a
 *   value or a promise. An attempt fails when it throws or the promise rejects.
 * @param options - How many attempts to make, how long to wait between them, and when to
 *   stop early.
 * @returns The result of the first attempt that succeeds.
 * @throws The last attempt's error, once every attempt has failed or `shouldRetry` returns
 *   `false`. The signal's reason, if `signal` aborts. A `RangeError`, if `attempts` isn't a
 *   positive integer.
 * @example
 * const response = await retry(async () => {
 *   const res = await fetch(url);
 *   if (!res.ok) throw new Error(`HTTP ${res.status}`);
 *   return res;
 * });
 *
 * @example
 * // 5 attempts, 500ms apart, giving up after 10 seconds
 * await retry(() => connect(), {
 *   attempts: 5,
 *   delay: 500,
 *   factor: 1,
 *   signal: AbortSignal.timeout(10_000),
 * });
 */
export async function retry<T>(
  fn: (attempt: number) => T | Promise<T>,
  { attempts = 3, delay = 1000, factor = 2, signal, shouldRetry = () => true }: RetryOptions = {}
): Promise<T> {
  if (!Number.isInteger(attempts) || attempts < 1) {
    throw new RangeError(`attempts must be a positive integer, got ${attempts}`);
  }

  for (let attempt = 1; ; attempt++) {
    signal?.throwIfAborted();
    try {
      return await fn(attempt);
    } catch (error) {
      if (attempt >= attempts || !shouldRetry(error, attempt)) {
        throw error;
      }
    }
    await wait(delay * factor ** (attempt - 1), signal);
  }
}
