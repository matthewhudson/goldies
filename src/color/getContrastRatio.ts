import { calculateRelativeLuminance } from './calculateRelativeLuminance.js';

/**
 * Calculates the WCAG contrast ratio between two colors.
 *
 * The ratio runs from 1 (no contrast) to 21 (black on white), and the order of the colors
 * doesn't matter. WCAG AA asks for at least 4.5 for normal text and 3 for large text; AAA
 * asks for 7 and 4.5.
 *
 * @param foreground - A 3- or 6-digit hex color, such as the text color. The leading `#` is
 *   optional.
 * @param background - A 3- or 6-digit hex color, such as the background color.
 * @returns The contrast ratio, from 1 to 21.
 * @throws {Error} If either color isn't a 3- or 6-digit hex color.
 * @example
 * getContrastRatio('#000000', '#ffffff'); // 21
 * getContrastRatio('#777777', '#ffffff'); // 4.47..., just short of AA for normal text
 *
 * @see {@link https://www.w3.org/TR/WCAG20/#contrast-ratiodef|WCAG 2.0 Contrast Ratio}
 */
export function getContrastRatio(foreground: string, background: string): number {
  const a = calculateRelativeLuminance(foreground);
  const b = calculateRelativeLuminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}
