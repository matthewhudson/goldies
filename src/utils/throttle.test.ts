import { throttle } from './throttle';

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('calls right away, then at most once per wait with the latest arguments', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled(1);
    expect(fn.mock.calls).toEqual([[1]]);

    throttled(2);
    throttled(3);
    vi.advanceTimersByTime(99);
    expect(fn).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1);
    expect(fn.mock.calls).toEqual([[1], [3]]);
  });

  test('keeps calling once per wait while calls continue', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    // A call every 25ms for 300ms
    for (let t = 0; t < 300; t += 25) {
      throttled(t);
      vi.advanceTimersByTime(25);
    }
    vi.advanceTimersByTime(100);

    expect(fn.mock.calls).toEqual([[0], [75], [175], [275]]);
  });

  test('calls right away again once a quiet wait has passed', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled('a');
    vi.advanceTimersByTime(250);
    throttled('b');

    expect(fn.mock.calls).toEqual([['a'], ['b']]);
  });

  test('keeps `this`', () => {
    const counter = {
      count: 0,
      increment: throttle(function (this: { count: number }) {
        this.count++;
      }, 100),
    };

    counter.increment();
    expect(counter.count).toBe(1);
  });

  test('with leading off, waits before the first call', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100, { leading: false });

    throttled(1);
    throttled(2);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(fn.mock.calls).toEqual([[2]]);
  });

  test('with trailing off, drops calls made during the wait', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100, { trailing: false });

    throttled(1);
    throttled(2);
    vi.advanceTimersByTime(100);
    throttled(3);

    expect(fn.mock.calls).toEqual([[1], [3]]);
  });

  test('cancel drops the pending call', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled(1);
    throttled(2);
    throttled.cancel();
    vi.advanceTimersByTime(100);

    expect(fn.mock.calls).toEqual([[1]]);
  });

  test('flush makes the pending call right away', () => {
    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled(1);
    throttled(2);
    throttled.flush();
    expect(fn.mock.calls).toEqual([[1], [2]]);

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
