/** Options for {@link debounce}. */
export interface DebounceOptions {
  /** Call the function on the first call of a burst. Defaults to `false`. */
  leading?: boolean;
  /** Call the function once calls stop for `wait` milliseconds. Defaults to `true`. */
  trailing?: boolean;
}

/** A debounced function, returned by {@link debounce}. */
export interface DebouncedFunction<F extends (...args: never[]) => unknown> {
  (this: ThisParameterType<F>, ...args: Parameters<F>): void;
  /** Drops the pending call, if there is one. */
  cancel(): void;
  /** Makes the pending call right away, if there is one. */
  flush(): void;
}

/**
 * Creates a function that waits until calls stop for `wait` milliseconds, then calls `fn`
 * once with the latest arguments.
 *
 * Use it for events that fire in bursts, such as typing or resizing, when only the final
 * state matters. To run at a steady rate during a burst instead, use `throttle`.
 *
 * @param fn - The function to debounce. Its return value is ignored.
 * @param wait - How long calls must stop for, in milliseconds.
 * @param options - Whether to call on the first call of a burst (`leading`) and after it
 *   (`trailing`).
 * @returns The debounced function, with `cancel()` and `flush()` methods.
 * @example
 * const search = debounce((query: string) => fetchResults(query), 300);
 *
 * input.addEventListener('input', () => search(input.value));
 *
 * // Leaving the page: drop the search that hasn't run yet
 * search.cancel();
 */
export function debounce<F extends (...args: never[]) => unknown>(
  fn: F,
  wait: number,
  { leading = false, trailing = true }: DebounceOptions = {}
): DebouncedFunction<F> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let pending: { context: ThisParameterType<F>; args: Parameters<F> } | undefined;

  function callPending(): void {
    if (pending) {
      const { context, args } = pending;
      pending = undefined;
      fn.apply(context, args);
    }
  }

  const debounced = function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
    const startsBurst = timer === undefined;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      if (trailing) callPending();
      pending = undefined;
    }, wait);

    if (startsBurst && leading) {
      fn.apply(this, args);
    } else {
      pending = { context: this, args };
    }
  } as DebouncedFunction<F>;

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = undefined;
    pending = undefined;
  };

  debounced.flush = () => {
    clearTimeout(timer);
    timer = undefined;
    callPending();
  };

  return debounced;
}
