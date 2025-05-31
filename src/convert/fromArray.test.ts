import { fromArray } from './fromArray'

describe('fromArray', () => {
  test('converts an array to a comma-separated string', () => {
    const inputArray: string[] = ['a', 'b', 'c'];
    const expected = 'a,b,c'
    const result = fromArray(inputArray)

    expect(result).toBe(expected)
  })

  test('returns undefined when input is not an array', () => {
    const input = 'not an array'
    const result = fromArray(input as unknown as unknown[]);

    expect(result).toBeUndefined()
  })

  test('handles empty array input', () => {
    const inputArray: string[] = [];
    const expected = '';
    const result = fromArray(inputArray);

    expect(result).toBe(expected);
  });

  test('handles array with mixed types', () => {
    const inputArray: (string | number | boolean)[] = ['a', 1, true];
    const expected = 'a,1,true';
    const result = fromArray(inputArray);

    expect(result).toBe(expected);
  });

  test('handles array with undefined/null values', () => {
    const inputArray: (string | undefined | null)[] = ['a', undefined, null];
    const expected = 'a,,';
    const result = fromArray(inputArray);

    expect(result).toBe(expected);
  });

  test('handles array with objects', () => {
    const inputArray: { key: string }[] = [{ key: 'value' }, { key: 'value2' }];
    const expected = '[object Object],[object Object]';
    const result = fromArray(inputArray);

    expect(result).toBe(expected);
  });
})
