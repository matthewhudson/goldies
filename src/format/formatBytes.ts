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
  if (bytes === 0) return 'n/a';

  const units: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const exponent: number = Math.floor(Math.log(bytes) / Math.log(1024));
  const value: number = bytes / 1024 ** exponent;

  return exponent === 0
    ? `${bytes}${separator}${units[exponent]}`
    : `${value.toFixed(1)}${separator}${units[exponent]}`;
};
