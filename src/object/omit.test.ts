import { omit } from './omit';

describe('omit', () => {
  test('creates an object without the given properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
    expect(omit(obj, ['a', 'c'])).toEqual({ b: 2 });
  });

  test('copies everything when no properties are given', () => {
    const obj = { a: 1, b: 2 };
    const result = omit(obj, []);
    expect(result).toEqual(obj);
    expect(result).not.toBe(obj);
  });

  test('does not change the input object', () => {
    const obj = { a: 1, b: 2 };
    omit(obj, ['a']);
    expect(obj).toEqual({ a: 1, b: 2 });
  });

  test('keeps nested values by reference', () => {
    const nested = { deep: true };
    expect(omit({ a: 1, nested }, ['a']).nested).toBe(nested);
  });

  test('ignores properties the object does not have', () => {
    const obj: { a: number; b?: number } = { a: 1 };
    expect(omit(obj, ['b'])).toEqual({ a: 1 });
  });

  test('omits symbol keys too', () => {
    const id = Symbol('id');
    const result = omit({ [id]: 1, a: 2 }, [id]);
    expect(Object.getOwnPropertySymbols(result)).toEqual([]);
    expect(result).toEqual({ a: 2 });
  });
});
