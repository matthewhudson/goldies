import { pick } from './pick'

describe('pick()', () => {
  test('creates a new object with only the specified properties', () => {
    const obj = { foo: 'bar', baz: 'qux', corge: 'grault' }
    expect(pick(obj, ['foo', 'baz'])).toEqual({ foo: 'bar', baz: 'qux' })
  })

  test('returns undefined if either object or properties are not provided', () => {
    expect(pick(null, ['foo', 'baz'])).toBeUndefined()
    expect(pick({ foo: 'bar', baz: 'qux' }, null)).toBeUndefined()
  })
})
