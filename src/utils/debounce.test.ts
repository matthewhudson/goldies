import { debounce } from './debounce';

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('calls the function once, after calls stop for the wait', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced('a');
    vi.advanceTimersByTime(50);
    debounced('b');
    vi.advanceTimersByTime(99);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('b');
  });

  test('calls again for calls after the wait has passed', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced(1);
    vi.advanceTimersByTime(100);
    debounced(2);
    vi.advanceTimersByTime(100);

    expect(fn.mock.calls).toEqual([[1], [2]]);
  });

  test('keeps `this`', () => {
    const counter = {
      count: 0,
      increment: debounce(function (this: { count: number }) {
        this.count++;
      }, 100),
    };

    counter.increment();
    vi.advanceTimersByTime(100);
    expect(counter.count).toBe(1);
  });

  describe('leading', () => {
    test('calls on the first call, and at the end only if called again', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 100, { leading: true });

      debounced('first');
      expect(fn.mock.calls).toEqual([['first']]);
      vi.advanceTimersByTime(100);
      expect(fn).toHaveBeenCalledTimes(1);

      debounced('second');
      debounced('third');
      vi.advanceTimersByTime(100);
      expect(fn.mock.calls).toEqual([['first'], ['second'], ['third']]);
    });

    test('with trailing off, ignores calls until the wait passes', () => {
      const fn = vi.fn();
      const debounced = debounce(fn, 100, { leading: true, trailing: false });

      debounced(1);
      debounced(2);
      vi.advanceTimersByTime(50);
      debounced(3);
      vi.advanceTimersByTime(100);
      debounced(4);

      expect(fn.mock.calls).toEqual([[1], [4]]);
    });
  });

  test('cancel drops the pending call', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced();
    debounced.cancel();
    vi.advanceTimersByTime(100);

    expect(fn).not.toHaveBeenCalled();
  });

  test('flush makes the pending call right away', () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced('now');
    debounced.flush();
    expect(fn.mock.calls).toEqual([['now']]);

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('flush does nothing when no call is pending', () => {
    const fn = vi.fn();
    debounce(fn, 100).flush();
    expect(fn).not.toHaveBeenCalled();
  });
});
