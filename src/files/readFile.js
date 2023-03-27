import fs from 'fs/promises'

/**
 * Reads a file and returns a promise that resolves with the file's contents.
 *
 * @param {string} path - The path of the file to read.
 * @returns {Promise<string>} A promise that resolves with the file's contents.
 */
export async function readFile (path) {
  return fs.readFile(path, 'utf-8')
}
