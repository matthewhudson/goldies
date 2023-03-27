/**
 * Parses a JSON string from a Buffer or byte array
 * @param {Buffer | Uint8Array} bytes - The Buffer or byte array containing the JSON string
 * @returns {Object} - The parsed JSON object
 * @example
 * const jsonString = '{"key": "value"}';
 * const buffer = Buffer.from(jsonString, 'utf-8');
 * const result = parseJSONFromBytes(buffer); // { key: 'value' }
 */
export function parseJSONFromBytes (bytes) {
  const jsonText = bytes.toString('utf-8')
  return JSON.parse(jsonText)
}
