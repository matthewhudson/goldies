/**
 * Format bytes into a human-readable string with unit.
 *
 * @param bytes - The number of bytes to format.
 * @param separator - The separator between the number and unit. Defaults to a space.
 * @returns The formatted string.
 * @example
 * // returns '1.0 MB'
 * formatBytes(1048576)
 * @example
 * // returns '1.0-MB'
 * formatBytes(1048576, '-')
 */
export const formatBytes = (bytes: number, separator: string = ' '): string => {
  if (bytes === 0 || !Number.isFinite(bytes)) return 'n/a';

  const units: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let exponent: number = 0;
  let value: number = Math.abs(bytes);

  // Divide rather than use Math.log, which can land just below a whole exponent
  while (value >= 1024 && exponent < units.length - 1) {
    value /= 1024;
    exponent++;
  }

  return exponent === 0
    ? `${bytes}${separator}${units[exponent]}`
    : `${(Math.sign(bytes) * value).toFixed(1)}${separator}${units[exponent]}`;
};
