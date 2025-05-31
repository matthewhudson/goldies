import { fromBase64 } from './fromBase64'

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
})
