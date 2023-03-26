/**
 * Format bytes into a human-readable string with unit.
 *
 * @param {number} bytes - The number of bytes to format.
 * @param {string} [separator=' '] - The separator between the number and unit.
 * @returns {string} The formatted string.
 * @example
 * // returns '1.0 MB'
 * formatBytes(1048576)
 * @example
 * // returns '1.0-MB'
 * formatBytes(1048576, '-')
 */
export const formatBytes = (bytes, separator = ' ') => {
  if (bytes === 0) return 'n/a'

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const exponent = Math.floor(Math.log(bytes) / Math.log(1024))
  const value = bytes / (1024 ** exponent)

  return exponent === 0
    ? `${bytes}${separator}${units[exponent]}`
    : `${value.toFixed(1)}${separator}${units[exponent]}`
}
