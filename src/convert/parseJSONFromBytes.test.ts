import { parseJSONFromBytes } from './parseJSONFromBytes';

describe('parseJSONFromBytes', () => {
  test('parses a JSON object from a Buffer', () => {
    const jsonString = '{"key": "value"}';
    const buffer = Buffer.from(jsonString, 'utf-8');
    const expected = { key: 'value' };
    const result = parseJSONFromBytes(buffer);

    expect(result).toEqual(expected);
  });

  test('parses a JSON object from a Uint8Array', () => {
    const jsonString = '{"key": "value"}';
    const uint8Array = new TextEncoder().encode(jsonString);
    const expected = { key: 'value' };
    const result = parseJSONFromBytes(uint8Array);

    expect(result).toEqual(expected);
  });

  test('throws on invalid JSON', () => {
    const invalidJson = Buffer.from('not json', 'utf-8');
    expect(() => parseJSONFromBytes(invalidJson)).toThrow();
  });

  test('throws on empty input', () => {
    const emptyBuffer = Buffer.from('', 'utf-8');
    expect(() => parseJSONFromBytes(emptyBuffer)).toThrow();
  });
});
