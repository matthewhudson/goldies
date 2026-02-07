/**
 * Determines the optimal contrast color (black or white) for text displayed on a given background color.
 *
 * Uses the YIQ color space formula to calculate perceived brightness and returns
 * either black (`#000000`) or white (`#ffffff`) for maximum readability.
 *
 * @param hexCode - A 3 or 6 character hexadecimal color code. The leading `#` is optional.
 *   Defaults to `#008000` (green) if not provided.
 * @returns The contrasting color as a 6-character hex string with leading `#`.
 *   Returns `#000000` (black) for light backgrounds or `#ffffff` (white) for dark backgrounds.
 *
 * @example
 * // With 6-digit hex code
 * getContrastColor('#ff0000');
 * // => '#ffffff'
 *
 * @example
 * // With 3-digit shorthand hex code
 * getContrastColor('000');
 * // => '#ffffff'
 *
 * @example
 * // Light background returns black text
 * getContrastColor('#ffffff');
 * // => '#000000'
 *
 * @example
 * // Dark background returns white text
 * getContrastColor('#000000');
 * // => '#ffffff'
 *
 * @example
 * // Using default value
 * getContrastColor();
 * // => '#ffffff'
 *
 * @see {@link https://en.wikipedia.org/wiki/YIQ|YIQ Color Space}
 */
export function getContrastColor(hexCode: string = '#008000'): string {
  // If a leading # is provided, remove it
  if (hexCode.startsWith('#')) {
    hexCode = hexCode.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexCode.length === 3) {
    hexCode = hexCode
      .split('')
      .map((hexCharacter) => hexCharacter + hexCharacter)
      .join('');
  }

  // Convert to RGB value
  const r = parseInt(hexCode.slice(0, 2), 16);
  const g = parseInt(hexCode.slice(2, 4), 16);
  const b = parseInt(hexCode.slice(4, 6), 16);

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? '#000000' : '#ffffff';
}
