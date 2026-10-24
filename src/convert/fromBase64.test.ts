import { fromBase64 } from './fromBase64';

describe('fromBase64', () => {
  test('decodes a Base64 encoded string to ASCII', () => {
    expect(fromBase64('SGVsbG8gV29ybGQ=')).toBe('Hello World');
  });

  test('handles empty input', () => {
    expect(fromBase64('')).toBe('');
  });

  test('handles Base64 without padding', () => {
    expect(fromBase64('SGVsbG8gV29ybGQ=')).toBe('Hello World'); // With padding
    expect(fromBase64('SGVsbG8gV29ybGQ')).toBe('Hello World'); // Without padding
  });

  test('handles missing input', () => {
    expect(fromBase64()).toBe('');
  });

  test('decodes UTF-8 and the URL-safe alphabet', () => {
    expect(fromBase64('SGVsbG8g8J+MjQ==')).toBe('Hello 🌍');
    expect(fromBase64('SGVsbG8g8J-MjQ')).toBe('Hello 🌍');
  });

  test('returns an empty string for malformed input', () => {
    expect(fromBase64('a!Gk')).toBe('');
  });

  test('works without Node Buffer (browsers)', () => {
    vi.stubGlobal('Buffer', undefined);
    try {
      expect(fromBase64('SGVsbG8g8J+MjQ==')).toBe('Hello 🌍');
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
