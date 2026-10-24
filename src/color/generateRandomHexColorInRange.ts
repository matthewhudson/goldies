import { hexToRgb } from './hexToRgb.js';

/**
 * Generates a random hexadecimal color code within a specified RGB range.
 *
 * Creates a random color where each RGB component is independently randomized
 * between the corresponding components of the two colors. This is useful
 * for generating colors within a specific color palette or theme.
 *
 * @param minColor - One bound of the range, as a 3- or 6-digit hex color. The leading `#`
 *   is optional. Defaults to `#000000` (black).
 * @param maxColor - The other bound, as a 3- or 6-digit hex color. The leading `#` is
 *   optional. Defaults to `#ffffff` (white). If a channel of `minColor` is the higher one,
 *   the bounds for that channel are swapped.
 * @returns A random 6-character hexadecimal color code with leading `#`,
 *   where each RGB component falls within the specified range.
 * @throws {Error} If either color isn't a 3- or 6-digit hex color.
 *
 * @example
 * // Generate any color in the full spectrum
 * generateRandomHexColorInRange('#000000', '#ffffff');
 * // => '#7a3f2c' (or any random hex color)
 *
 * @example
 * // Generate a shade of blue
 * generateRandomHexColorInRange('#000066', '#0000ff');
 * // => '#0000a3'
 *
 * @example
 * // Generate warm colors (reds/oranges)
 * generateRandomHexColorInRange('#800000', '#ff8800');
 * // => '#c24510'
 *
 * @example
 * // Generate muted colors, with every channel between 0x33 and 0xcc
 * generateRandomHexColorInRange('#333333', '#cccccc');
 * // => '#7a4f9c'
 *
 * @example
 * // Using default values
 * generateRandomHexColorInRange();
 * // => '#4f8c2a' (same as full spectrum)
 */
export function generateRandomHexColorInRange(
  minColor: string = '#000000',
  maxColor: string = '#ffffff'
): string {
  const min = hexToRgb(minColor);
  const max = hexToRgb(maxColor);

  // Generate random RGB values within the range
  const channels = (['r', 'g', 'b'] as const).map((channel) => {
    const low = Math.min(min[channel], max[channel]);
    const high = Math.max(min[channel], max[channel]);
    return Math.floor(Math.random() * (high - low + 1)) + low;
  });

  // Convert back to hex
  return `#${channels.map((x) => x.toString(16).padStart(2, '0')).join('')}`;
}
