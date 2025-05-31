/**
 * Encodes a string to Base64.
 * @param {string} [inputString=''] - The string to encode.
 * @returns {string} The Base64 encoded string.
 * @example
 * const encoded = toBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
 */
export function toBase64(inputString: string = ''): string {
  try {
    return Buffer.from(inputString, 'utf-8').toString('base64');
  } catch (error) {
    return '';
  }
}
