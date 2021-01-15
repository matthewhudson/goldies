/**
 * Convert backslash in the given string to forward slashes
 */
export default function unixify (filePath) {
  return filePath.split(/\\+/).join('/')
}
