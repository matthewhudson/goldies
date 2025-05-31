/**
 * Generate a random hex color code.
 *
 * @returns A random hex color code.
 * @example
 *
 * getRandomColor()
 * // => '#ff0000'
 */
export function getRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
} 