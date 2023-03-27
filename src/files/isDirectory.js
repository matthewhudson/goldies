import fs from 'fs'
import path from 'path'

/**
 * Determines if a given file in a directory is a directory itself.
 *
 * @param {string} directoryPath - The directory path containing the file.
 * @param {string} fileName - The name of the file.
 * @returns {boolean} `true` if the file is a directory, `false` otherwise.
 *
 * @example
 * isDirectory('/path/to/directory', 'subdirectory') // returns true
 */
export function isDirectory (directoryPath, fileName) {
  const fileStat = fs.statSync(path.join(directoryPath, fileName))
  return fileStat.isDirectory()
}
