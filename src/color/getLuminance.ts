/**
 * Calculate the relative luminance of a color.
 *
 * @param hexCode - Three or six character hex code, with `#` optional.
 * @returns The relative luminance value between 0 and 1.
 * @example
 *
 * getLuminance('#ff0000')
 * // => 0.2126
 *
 * getLuminance('000')
 * // => 0
 */
export function getLuminance(hexCode: string = '#008000'): number {
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

  // Convert to sRGB
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;

  // Convert to linear RGB
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
} 