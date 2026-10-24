/**
 * Converts a hex color to its red, green and blue values.
 *
 * @param hexCode - A 3- or 6-digit hex color, such as `#f80` or `#ff8800`. The leading `#` is
 *   optional, and case doesn't matter.
 * @returns The color's channels, each from 0 to 255.
 * @throws {Error} If `hexCode` isn't a 3- or 6-digit hex color.
 * @example
 * hexToRgb('#ff8000'); // { r: 255, g: 128, b: 0 }
 * hexToRgb('fff'); // { r: 255, g: 255, b: 255 }
 */
export function hexToRgb(hexCode: string): { r: number; g: number; b: number } {
  const digits = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec(hexCode)?.[1];
  if (!digits) {
    throw new Error(`Invalid hex color: "${hexCode}"`);
  }

  // Expand shorthand: f80 -> ff8800
  const hex = digits.length === 3 ? digits.replace(/./g, '$&$&') : digits;
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}
