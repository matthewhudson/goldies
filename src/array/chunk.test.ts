import { chunk } from './chunk';

describe('chunk', () => {
  test('splits an array into chunks of the given size', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test('puts the remainder in a shorter last chunk', () => {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([['a', 'b'], ['c', 'd'], ['e']]);
  });

  test('returns one chunk when the size is at least the length', () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
  });

  test('returns no chunks for an empty array', () => {
    expect(chunk([], 3)).toEqual([]);
  });

  test('does not change the input array', () => {
    const input = [1, 2, 3];
    chunk(input, 2);
    expect(input).toEqual([1, 2, 3]);
  });

  test('throws for sizes that are not positive integers', () => {
    for (const size of [0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(() => chunk([1, 2, 3], size)).toThrow(RangeError);
    }
  });
});
