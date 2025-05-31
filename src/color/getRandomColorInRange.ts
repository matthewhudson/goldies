/**
 * Generate a random hex color code within a specified range.
 *
 * @param min - The minimum hex color code.
 * @param max - The maximum hex color code.
 * @returns A random hex color code within the specified range.
 * @example
 *
 * getRandomColorInRange('#000000', '#ffffff')
 * // => '#ff0000'
 */
export function getRandomColorInRange(min: string = '#000000', max: string = '#ffffff'): string {
  // If a leading # is provided, remove it
  if (min.startsWith('#')) {
    min = min.slice(1);
  }
  if (max.startsWith('#')) {
    max = max.slice(1);
  }

  // Convert to RGB value
  const minR = parseInt(min.slice(0, 2), 16);
  const minG = parseInt(min.slice(2, 4), 16);
  const minB = parseInt(min.slice(4, 6), 16);

  const maxR = parseInt(max.slice(0, 2), 16);
  const maxG = parseInt(max.slice(2, 4), 16);
  const maxB = parseInt(max.slice(4, 6), 16);

  // Generate random RGB values within the range
  const r = Math.floor(Math.random() * (maxR - minR + 1)) + minR;
  const g = Math.floor(Math.random() * (maxG - minG + 1)) + minG;
  const b = Math.floor(Math.random() * (maxB - minB + 1)) + minB;

  // Convert back to hex
  return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
} 