import { dedupe } from './dedupe'

describe('dedupe', () => {
  test('dedupes an array', () => {
    expect(dedupe([1, 2, 2])).toEqual([1, 2]);
  });

  test('returns an empty array when input is empty', () => {
    expect(dedupe([])).toEqual([]);
  });

  test('returns the same array when there are no duplicates', () => {
    expect(dedupe([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('dedupes an array with mixed types', () => {
    expect(dedupe([1, '1', 1, '1'])).toEqual([1, '1']);
  });

  test('handles null and undefined values', () => {
    expect(dedupe([null, undefined, null, undefined])).toEqual([null, undefined]);
  });

  test('dedupes objects by reference', () => {
    const obj = { a: 1 };
    expect(dedupe([obj, { a: 1 }, obj])).toEqual([obj, { a: 1 }]);
  });

  test('handles falsy values correctly', () => {
    expect(dedupe([0, false, '', 0, false, ''])).toEqual([0, false, '']);
  });

  test('dedupes a larger array', () => {
    expect(dedupe([1, 2, 3, 1, 4, 2, 5, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
