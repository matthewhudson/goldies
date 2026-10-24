/**
 * Parses a JSON object from a Buffer or Uint8Array. Works in Node.js and browsers.
 *
 * @param bytes - The Buffer or Uint8Array containing the JSON string (a Buffer is a Uint8Array).
 * @returns The parsed JSON object.
 * @example
 * const buffer = Buffer.from('{"key": "value"}', 'utf-8');
 * const result = parseJSONFromBytes(buffer); // { key: 'value' }
 */
export function parseJSONFromBytes(bytes: Uint8Array): unknown {
  return JSON.parse(new TextDecoder('utf-8').decode(bytes));
}
