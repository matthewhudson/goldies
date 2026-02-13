/**
 * Validates whether a string is a valid "simple color" as defined by the WHATWG HTML specification.
 *
 * A valid simple color is exactly 7 characters: a `#` followed by 6 hexadecimal digits (0-9, a-f, A-F).
 * This is the format required for HTML color input elements and many CSS properties.
 *
 * Note: This function does NOT accept 3-digit shorthand hex codes (e.g., `#FFF`),
 * as they are not considered "simple colors" per the WHATWG specification.
 *
 * @param hexString - The string to validate as a hex color.
 * @returns `true` if the string is a valid 6-digit hex color with leading `#`, `false` otherwise.
 *
 * @example
 * // Valid simple colors
 * isValidHexColor('#FFFFFF'); // => true
 * isValidHexColor('#123456'); // => true
 * isValidHexColor('#abcdef'); // => true
 * isValidHexColor('#AbCdEf'); // => true
 *
 * @example
 * // Invalid: 3-digit shorthand
 * isValidHexColor('#FFF'); // => false
 * isValidHexColor('#000'); // => false
 *
 * @example
 * // Invalid: missing # prefix
 * isValidHexColor('FFFFFF'); // => false
 *
 * @example
 * // Invalid: wrong characters
 * isValidHexColor('#xyz123'); // => false
 * isValidHexColor('#GGGGGG'); // => false
 *
 * @example
 * // Invalid: wrong length
 * isValidHexColor('#12345');  // => false
 * isValidHexColor('#1234567'); // => false
 *
 * @see {@link https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour|WHATWG HTML Spec: Valid Simple Color}
 */
export function isValidHexColor(hexString: string): boolean {
  return /^#[a-fA-F\d]{6}$/.test(hexString);
}
