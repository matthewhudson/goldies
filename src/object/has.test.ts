import { has } from './has'

describe('has', () => {
  const obj = { a: 1, b: 2, c: 3 }

  test('returns true if object has the property', () => {
    expect(has(obj, 'a')).toBe(true)
  })

  test('returns false if object does not have the property', () => {
    expect(has(obj, 'd')).toBe(false)
  })

  test('returns false if property is in prototype chain', () => {
    function Foo(): void {}
    Foo.prototype.bar = true
    const obj = new Foo()
    expect(has(obj, 'bar')).toBe(false)
  })
})
