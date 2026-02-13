/**
 * Generates a random hexadecimal color code within a specified RGB range.
 *
 * Creates a random color where each RGB component is independently randomized
 * within the bounds defined by the minimum and maximum colors. This is useful
 * for generating colors within a specific color palette or theme.
 *
 * @param minColor - The minimum boundary hex color code. Each RGB component of the
 *   result will be >= the corresponding component of this color.
 *   The leading `#` is optional. Defaults to `#000000` (black).
 * @param maxColor - The maximum boundary hex color code. Each RGB component of the
 *   result will be <= the corresponding component of this color.
 *   The leading `#` is optional. Defaults to `#ffffff` (white).
 * @returns A random 6-character hexadecimal color code with leading `#`,
 *   where each RGB component falls within the specified range.
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
 * // Generate grayscale colors
 * generateRandomHexColorInRange('#333333', '#cccccc');
 * // => '#7a7a7a'
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
  // If a leading # is provided, remove it
  if (minColor.startsWith('#')) {
    minColor = minColor.slice(1);
  }
  if (maxColor.startsWith('#')) {
    maxColor = maxColor.slice(1);
  }

  // Convert to RGB value
  const minR = parseInt(minColor.slice(0, 2), 16);
  const minG = parseInt(minColor.slice(2, 4), 16);
  const minB = parseInt(minColor.slice(4, 6), 16);

  const maxR = parseInt(maxColor.slice(0, 2), 16);
  const maxG = parseInt(maxColor.slice(2, 4), 16);
  const maxB = parseInt(maxColor.slice(4, 6), 16);

  // Generate random RGB values within the range
  const r = Math.floor(Math.random() * (maxR - minR + 1)) + minR;
  const g = Math.floor(Math.random() * (maxG - minG + 1)) + minG;
  const b = Math.floor(Math.random() * (maxB - minB + 1)) + minB;

  // Convert back to hex
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
} 