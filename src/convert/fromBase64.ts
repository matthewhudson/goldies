/**
 * Decodes a Base64 encoded string to ASCII.
 *
 * @param base64String - The Base64 encoded string to decode.
 * @returns The decoded ASCII string.
 * @example
 * const decoded = fromBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
 */
export function fromBase64(base64String: string = ''): string {
  try {
    return Buffer.from(base64String, 'base64').toString('utf-8');
  } catch (error) {
    return '';
  }
}
