import { retry } from './retry';

// Throws `failure 1`, `failure 2`... for the first `times` calls, then resolves with 'ok'
function failing(times: number) {
  let calls = 0;
  return vi.fn(async () => {
    calls++;
    if (calls <= times) throw new Error(`failure ${calls}`);
    return 'ok';
  });
}

describe('retry', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('returns the result without waiting when the first attempt succeeds', async () => {
    const fn = vi.fn(async () => 42);
    await expect(retry(fn)).resolves.toBe(42);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('works with functions that do not return a promise', async () => {
    await expect(retry(() => 'sync')).resolves.toBe('sync');
  });

  test('retries after a failure and returns the first success', async () => {
    const fn = failing(2);
    const result = retry(fn);

    await vi.advanceTimersByTimeAsync(1000 + 2000);
    await expect(result).resolves.toBe('ok');
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test('passes the attempt number, starting at 1', async () => {
    const fn = failing(2);
    const result = retry(fn);

    await vi.advanceTimersByTimeAsync(3000);
    await result;
    expect(fn.mock.calls).toEqual([[1], [2], [3]]);
  });

  test('waits `delay`, multiplied by `factor` after each retry', async () => {
    const fn = failing(3);
    const result = retry(fn, { attempts: 4, delay: 100, factor: 3 });
    expect(fn).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(99);
    expect(fn).toHaveBeenCalledTimes(1);
    await vi.advanceTimersByTimeAsync(1); // 100ms
    expect(fn).toHaveBeenCalledTimes(2);

    await vi.advanceTimersByTimeAsync(299);
    expect(fn).toHaveBeenCalledTimes(2);
    await vi.advanceTimersByTimeAsync(1); // 300ms
    expect(fn).toHaveBeenCalledTimes(3);

    await vi.advanceTimersByTimeAsync(900);
    expect(fn).toHaveBeenCalledTimes(4);
    await expect(result).resolves.toBe('ok');
  });

  test('throws the last error once every attempt has failed', async () => {
    const fn = failing(5);
    const result = retry(fn, { attempts: 3, delay: 10 });
    const assertion = expect(result).rejects.toThrow('failure 3');

    await vi.advanceTimersByTimeAsync(10 + 20);
    await assertion;
    expect(fn).toHaveBeenCalledTimes(3);
  });

  test('stops early when shouldRetry returns false', async () => {
    const fn = failing(5);
    const shouldRetry = vi.fn((_error: unknown, attempt: number) => attempt < 2);
    const result = retry(fn, { attempts: 5, delay: 10, shouldRetry });
    const assertion = expect(result).rejects.toThrow('failure 2');

    await vi.advanceTimersByTimeAsync(1000);
    await assertion;
    expect(fn).toHaveBeenCalledTimes(2);
    expect(shouldRetry.mock.calls).toEqual([
      [new Error('failure 1'), 1],
      [new Error('failure 2'), 2],
    ]);
  });

  describe('signal', () => {
    test('rejects with the abort reason during a wait, without more attempts', async () => {
      const controller = new AbortController();
      const fn = failing(5);
      const result = retry(fn, { delay: 1000, signal: controller.signal });
      const assertion = expect(result).rejects.toThrow('stop');

      await vi.advanceTimersByTimeAsync(500);
      controller.abort(new Error('stop'));
      await assertion;

      await vi.advanceTimersByTimeAsync(10_000);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    test('rejects right away when aborted during an attempt', async () => {
      const controller = new AbortController();
      const fn = vi.fn(async () => {
        controller.abort(new Error('stop'));
        throw new Error('failed');
      });
      const outcome = retry(fn, { delay: 1000, signal: controller.signal }).then(
        () => 'resolved',
        (error: Error) => error.message
      );

      await vi.advanceTimersByTimeAsync(0);
      expect(await Promise.race([outcome, Promise.resolve('still waiting')])).toBe('stop');
      expect(fn).toHaveBeenCalledTimes(1);
    });

    test('does not call the function when already aborted', async () => {
      const fn = vi.fn(async () => 'ok');
      const signal = AbortSignal.abort(new Error('already'));

      await expect(retry(fn, { signal })).rejects.toThrow('already');
      expect(fn).not.toHaveBeenCalled();
    });
  });

  test('throws for attempts that are not positive integers', async () => {
    for (const attempts of [0, -1, 1.5, Number.NaN]) {
      await expect(retry(async () => 'ok', { attempts })).rejects.toThrow(RangeError);
    }
  });
});
