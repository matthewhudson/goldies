import { clone } from './clone'

describe('clone()', () => {
  test('clones an object', () => {
    const original = { a: 1, b: 2 }
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('clones a nested object', () => {
    const original = { a: { b: 1 } }
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned.a).not.toBe(original.a)
  })

  test('clones an array', () => {
    const original = [1, 2, 3]
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
  })

  test('clones a nested array', () => {
    const original = [1, [2, 3], 4]
    const cloned = clone(original)
    expect(cloned).toEqual(original)
    expect(cloned).not.toBe(original)
    expect(cloned[1]).not.toBe(original[1])
  })

  test('returns null for null', () => {
    expect(clone(null)).toBe(null)
  })

  test('returns undefined for undefined', () => {
    expect(clone(undefined)).toBe(undefined)
  })

  test('returns the original value for non-objects', () => {
    expect(clone(42)).toBe(42)
    expect(clone('hello')).toBe('hello')
    expect(clone(true)).toBe(true)
    expect(clone(false)).toBe(false)
  })

  test('clones Date values', () => {
    const original = { when: new Date(0) }
    const cloned = clone(original)
    expect(cloned.when).toBeInstanceOf(Date)
    expect(cloned.when.getTime()).toBe(0)
    expect(cloned.when).not.toBe(original.when)
  })

  test('clones Map and Set values', () => {
    const original = { map: new Map([['a', { b: 1 }]]), set: new Set([1, 2]) }
    const cloned = clone(original)
    expect(cloned.map).toBeInstanceOf(Map)
    expect(cloned.map.get('a')).toEqual({ b: 1 })
    expect(cloned.map.get('a')).not.toBe(original.map.get('a'))
    expect(cloned.set).toBeInstanceOf(Set)
    expect([...cloned.set]).toEqual([1, 2])
  })

  test('returns a frozen object', () => {
    const original = { a: 1, b: 2 }
    const cloned = clone(original)
    expect(Object.isFrozen(cloned)).toBe(true)
  })
})
