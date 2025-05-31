import { toBase64 } from './toBase64'

describe('toBase64', () => {
  test('encodes a string to Base64', () => {
    expect(toBase64('Hello World')).toBe('SGVsbG8gV29ybGQ=');
  });

  test('handles empty input', () => {
    expect(toBase64('')).toBe('');
  });

  test('encodes non-ASCII characters', () => {
    expect(toBase64('Hello 🌍')).toBe('SGVsbG8g8J+MjQ==');
  });

  test('handles invalid input', () => {
    expect(toBase64('')).toBe('');
  });

  test('handles missing input', () => {
    expect(toBase64()).toBe('');
  });
})
