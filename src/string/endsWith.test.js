import { endsWith } from './endsWith'

describe('endsWith', () => {
  test('returns true if the string ends with the specified substring (case-insensitive)', () => {
    expect(endsWith('JavaScript', 'script')).toBe(true)
    expect(endsWith('Hello, World!', 'WORLD!')).toBe(true)
  })

  test('returns false if the string does not end with the specified substring (case-insensitive)', () => {
    expect(endsWith('JavaScript', 'Scripting')).toBe(false)
    expect(endsWith('Hello, World!', 'Hello')).toBe(false)
  })
})
