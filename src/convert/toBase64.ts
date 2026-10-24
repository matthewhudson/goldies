/**
 * Encodes a string to Base64. The string is encoded as UTF-8 first.
 * Works in Node.js and browsers.
 * @param {string} [inputString=''] - The string to encode.
 * @returns {string} The Base64 encoded string.
 * @example
 * const encoded = toBase64('Hello World'); // 'SGVsbG8gV29ybGQ='
 */
export function toBase64(inputString: string = ''): string {
  try {
    // btoa only accepts Latin-1, so pass it the UTF-8 bytes one character per byte
    let binary = '';
    for (const byte of new TextEncoder().encode(inputString)) {
      binary += String.fromCharCode(byte);
    }
    return btoa(binary);
  } catch {
    return '';
  }
}
