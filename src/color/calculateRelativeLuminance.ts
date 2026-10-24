import { hexToRgb } from './hexToRgb.js';

/**
 * Calculates the relative luminance of a color according to WCAG 2.0 guidelines.
 *
 * Relative luminance is the relative brightness of any point in a colorspace,
 * normalized to 0 for darkest black and 1 for lightest white. This value is
 * commonly used for calculating color contrast ratios for accessibility.
 *
 * @param hexCode - A 3 or 6 character hexadecimal color code. The leading `#` is optional.
 * @returns The relative luminance value as a number between 0 (black) and 1 (white).
 * @throws {Error} If `hexCode` isn't a 3- or 6-digit hex color.
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
 * @see {@link https://www.w3.org/TR/WCAG20/#relativeluminancedef|WCAG 2.0 Relative Luminance}
 * @see {@link https://en.wikipedia.org/wiki/Relative_luminance|Wikipedia: Relative Luminance}
 */
export function calculateRelativeLuminance(hexCode: string): number {
  const { r, g, b } = hexToRgb(hexCode);

  // Convert each channel to sRGB, then to linear RGB
  const [rLinear, gLinear, bLinear] = [r, g, b].map((channel) => {
    const sRGB = channel / 255;
    return sRGB <= 0.03928 ? sRGB / 12.92 : ((sRGB + 0.055) / 1.055) ** 2.4;
  });

  // Calculate relative luminance
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
