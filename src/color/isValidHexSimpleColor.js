/**
 * Check if a given color string is a valid simple color.
 * @see {@link https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour|WHATWG HTML Spec}
 * @param {string} hexString - The hexadecimal color string to check.
 * @returns {boolean} Returns true if the provided color string is a valid simple color, otherwise false.
 * @example
 * // Check if a color string is a valid simple color
 * isValidHexSimpleColor('#FFFFFF'); // returns true
 * isValidHexSimpleColor('#123456'); // returns true
 * isValidHexSimpleColor('#FFF'); // returns false
 * isValidHexSimpleColor('#xyz123'); // returns false
 */
export function isValidHexSimpleColor (hexString) {
  return /^#[a-fA-F\d]{6}$/.test(hexString)
}
