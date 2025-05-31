import { startsWith } from './startsWith'

describe('startsWith', () => {
  test('returns true if the haystack starts with the specified needle', () => {
    const haystack = 'Hello, world!'
    expect(startsWith(haystack, 'hello')).toBe(true)
  })

  test('returns false if the haystack does not start with the specified needle', () => {
    const haystack = 'Hello, world!'
    expect(startsWith(haystack, 'world')).toBe(false)
  })

  test('is case-insensitive', () => {
    const haystack = 'Hello, world!'
    expect(startsWith(haystack, 'HeLlO')).toBe(true)
  })

  test('handles empty strings', () => {
    expect(startsWith('', '')).toBe(true);
    expect(startsWith('hello', '')).toBe(true);
    expect(startsWith('', 'hello')).toBe(false);
  });

  test('handles whitespace', () => {
    expect(startsWith('  hello', '  ')).toBe(true);
    expect(startsWith('hello', '  ')).toBe(false);
  });

  test('handles special characters', () => {
    expect(startsWith('!@#$%', '!@#')).toBe(true);
    expect(startsWith('hello!', '!')).toBe(false);
  });
})
