/**
 * Encodes a string to Base64
 * @param {string} [str=''] - The input string
 * @returns {string} - The Base64 encoded string
 * @example
 * const inputString = 'hello world';
 * const result = toBase64(inputString); // 'aGVsbG8gd29ybGQ='
 */
export function toBase64 (str = '') {
  return Buffer.from(str, 'utf-8').toString('base64')
}
