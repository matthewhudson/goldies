/**
 * Find the appropriate contrast color (either black or white) for a given hex code.
 *
 * @param hexCode - Three or six character hex code, with `#` optional.
 * @returns The contrasting color (black or white).
 * @example
 *
 * getContrast('#ff0000')
 * // => '#ffffff'
 *
 * getContrast('000')
 * // => '#ffffff'
 */
export function getContrast(hexCode: string = '#008000'): string {
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
