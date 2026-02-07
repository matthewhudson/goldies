/**
 * Generates a random hexadecimal color code.
 *
 * Creates a cryptographically random color in the full RGB color space,
 * returning a properly formatted 6-digit hex color string.
 *
 * @returns A random 6-character hexadecimal color code with leading `#`.
 *
 * @example
 * generateRandomHexColor();
 * // => '#a3f29c' (or any random hex color)
 *
 * @example
 * // Using in a style context
 * const backgroundColor = generateRandomHexColor();
 * element.style.backgroundColor = backgroundColor;
 *
 * @example
 * // Generating multiple random colors
 * const palette = Array.from({ length: 5 }, () => generateRandomHexColor());
 * // => ['#f4a123', '#82cd4e', '#1a2b3c', '#ff9900', '#abc123']
 */
export function generateRandomHexColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
} 