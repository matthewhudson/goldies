/**
 * Decodes a Base64 encoded string to text, reading the bytes as UTF-8.
 * Accepts the standard and URL-safe alphabets, with or without padding.
 * Works in Node.js and browsers.
 *
 * @param base64String - The Base64 encoded string to decode.
 * @returns The decoded string, or an empty string if the input is not valid Base64.
 * @example
 * const decoded = fromBase64('SGVsbG8gV29ybGQ='); // 'Hello World'
 */
export function fromBase64(base64String: string = ''): string {
  try {
    const binary = atob(base64String.replace(/-/g, '+').replace(/_/g, '/'));
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    // ignoreBOM keeps a leading byte order mark, as Buffer#toString does
    return new TextDecoder('utf-8', { ignoreBOM: true }).decode(bytes);
  } catch {
    return '';
  }
}
