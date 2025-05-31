import { pick } from './pick'

describe('pick()', () => {
  test('creates a new object with only the specified properties', () => {
    const obj = { foo: 'bar', baz: 'qux', corge: 'grault' }
    expect(pick(obj, ['foo', 'baz'])).toEqual({ foo: 'bar', baz: 'qux' })
  })

  test('returns empty object if either object or properties are not provided', () => {
    expect(pick({} as Record<string, any>, ['foo', 'baz'])).toEqual({});
    const obj = { foo: 'bar', baz: 'qux' };
    expect(pick(obj, [] as Array<keyof typeof obj>)).toEqual({});
  });

  test('returns empty object if source object is empty', () => {
    const emptyObj: Record<string, any> = {};
    expect(pick(emptyObj, ['foo', 'baz'])).toEqual({});
  });

  test('returns empty object if props array is empty', () => {
    const obj = { foo: 'bar', baz: 'qux' };
    expect(pick(obj, [] as Array<keyof typeof obj>)).toEqual({});
  });

  test('ignores non-existent properties', () => {
    const obj = { foo: 'bar', baz: 'qux' };
    expect(pick(obj, ['foo', 'nonexistent' as keyof typeof obj])).toEqual({ foo: 'bar' });
  });
})
