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

  test('handles empty strings', () => {
    expect(endsWith('', '')).toBe(true);
    expect(endsWith('hello', '')).toBe(true);
    expect(endsWith('', 'hello')).toBe(false);
  });

  test('handles whitespace', () => {
    expect(endsWith('hello  ', '  ')).toBe(true);
    expect(endsWith('hello', '  ')).toBe(false);
  });

  test('handles special characters', () => {
    expect(endsWith('hello!@#', '!@#')).toBe(true);
    expect(endsWith('hello', '!')).toBe(false);
  });
})
