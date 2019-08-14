/**
 * Format bytes into something human readable:
 * 1000 bytes = 1 MB
 * Derived from: gist.github.com/lanqy/5193417
 * @param {Number} bytes
 * @param {String} [separator=' '] Add a space or other character between number and text
 * @returns {String} Human readable format
 */
export const bytesToSize = (bytes, separator = ' ') => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  return () => {
    if (bytes === 0) return 'n/a'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
    if (i === 0) return `${bytes}${separator}${sizes[i]}`
    return `${(bytes / 1024 ** i).toFixed(1)}${separator}${sizes[i]}`
  }
}
