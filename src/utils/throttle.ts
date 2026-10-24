/** Options for {@link throttle}. */
export interface ThrottleOptions {
  /** Call the function right away when it isn't waiting. Defaults to `true`. */
  leading?: boolean;
  /**
   * Make one more call, with the latest arguments, at the end of the wait if it was called
   * during it. Defaults to `true`.
   */
  trailing?: boolean;
}

/** A throttled function, returned by {@link throttle}. */
export interface ThrottledFunction<F extends (...args: never[]) => unknown> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
  /** Drops the pending call, if there is one. */
  cancel(): void;
  /** Makes the pending call right away, if there is one. */
  flush(): void;
}

/**
 * Creates a function that calls `fn` at most once every `wait` milliseconds.
 *
 * The first call runs right away. Calls during the wait are combined into one call at the
 * end of it, with the latest arguments, so the final state is never lost. Use it for events
 * that fire continuously, such as scrolling, when you want regular updates during them. To
 * run only once a burst is over, use `debounce`.
 *
 * @param fn - The function to throttle. Its return value is ignored.
 * @param wait - The minimum time between calls, in milliseconds.
 * @param options - Whether to call right away (`leading`) and at the end of the wait
 *   (`trailing`).
 * @returns The throttled function, with `cancel()` and `flush()` methods.
 * @example
 * const savePosition = throttle(() => {
 *   localStorage.setItem('scroll', String(window.scrollY));
 * }, 500);
 *
 * window.addEventListener('scroll', savePosition);
 */
export function throttle<F extends (...args: never[]) => unknown>(
  fn: F,
  wait: number,
  { leading = true, trailing = true }: ThrottleOptions = {}
): ThrottledFunction<F> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: { context: ThisParameterType<F>; args: Parameters<F> } | undefined;

  function callPending(): void {
    if (pending) {
      const { context, args } = pending;
      pending = undefined;
      fn.apply(context, args);
    }
  }

  function endWait(): void {
    if (trailing && pending) {
      callPending();
      // The trailing call starts a new wait
      timer = setTimeout(endWait, wait);
    } else {
      pending = undefined;
      timer = undefined;
    }
  }

  const throttled = function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
    if (timer === undefined && leading) {
      fn.apply(this, args);
    } else {
      pending = { context: this, args };
    }
    timer ??= setTimeout(endWait, wait);
  } as ThrottledFunction<F>;

  throttled.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  throttled.flush = () => {
    clearTimeout(timer);
    timer = undefined;
    callPending();
  };

  return throttled;
}
