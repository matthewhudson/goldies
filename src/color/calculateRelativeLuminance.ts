/**
 * Calculates the relative luminance of a color according to WCAG 2.0 guidelines.
 *
 * Relative luminance is the relative brightness of any point in a colorspace,
 * normalized to 0 for darkest black and 1 for lightest white. This value is
 * commonly used for calculating color contrast ratios for accessibility.
 *
 * @param hexCode - A 3 or 6 character hexadecimal color code. The leading `#` is optional.
 *   Defaults to `#008000` (green) if not provided.
 * @returns The relative luminance value as a number between 0 (black) and 1 (white).
 *
 * @example
 * // Pure red
 * calculateRelativeLuminance('#ff0000');
 * // => 0.2126
 *
 * @example
 * // Pure black
 * calculateRelativeLuminance('#000000');
 * // => 0
 *
 * @example
 * // Pure white
 * calculateRelativeLuminance('#ffffff');
 * // => 1
 *
 * @example
 * // Using 3-digit shorthand
 * calculateRelativeLuminance('000');
 * // => 0
 *
 * @example
 * // Green (default value)
 * calculateRelativeLuminance();
 * // => 0.1543... (approximately)
 *
 * @see {@link https://www.w3.org/TR/WCAG20/#relativeluminancedef|WCAG 2.0 Relative Luminance}
 * @see {@link https://en.wikipedia.org/wiki/Relative_luminance|Wikipedia: Relative Luminance}
 */
export function calculateRelativeLuminance(hexCode: string = '#008000'): number {
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