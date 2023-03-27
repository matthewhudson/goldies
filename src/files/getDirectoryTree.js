import fs from 'fs'
import path from 'path'

/**
 * Recursively reads a directory and returns an array of all files.
 *
 * @param {string} directoryPath - The directory path to read.
 * @returns {string[]} An array of file paths.
 *
 * @example
 * getDirectory('/path/to/directory') // returns ['/path/to/directory/file1.txt', '/path/to/directory/subdirectory/file2.txt', ...]
 */
export function getDirectoryTree (directoryPath) {
  const directoryItems = fs.readdirSync(directoryPath)
  const filelist = []

  directoryItems.forEach(file => {
    const filePath = path.join(directoryPath, file)

    if (fs.statSync(filePath).isDirectory()) {
      filelist.push(...getDirectoryTree(filePath))
    } else {
      filelist.push(filePath)
    }
  })

  return filelist
}
