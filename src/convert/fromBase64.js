/**
 * Decodes a Base64 encoded string to ASCII
 * @param {string} [str=''] - The Base64 encoded string
 * @returns {string} - The decoded ASCII string
 * @example
 * const base64String = 'aGVsbG8gd29ybGQ=';
 * const result = fromBase64(base64String); // 'hello world'
 */
export function fromBase64 (str = '') {
  return Buffer.from(str, 'base64').toString('ascii').trim()
}
