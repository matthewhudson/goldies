/**
 * Parses a JSON object from a Buffer or Uint8Array.
 *
 * @param bytes - The Buffer or Uint8Array containing the JSON string.
 * @returns The parsed JSON object.
 * @example
 * const buffer = Buffer.from('{"key": "value"}', 'utf-8');
 * const result = parseJSONFromBytes(buffer); // { key: 'value' }
 */
export function parseJSONFromBytes(bytes: Buffer | Uint8Array): unknown {
  const jsonString = Buffer.isBuffer(bytes)
    ? bytes.toString('utf-8')
    : new TextDecoder('utf-8').decode(bytes);
  return JSON.parse(jsonString);
}
