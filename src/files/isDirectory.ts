import * as fs from 'fs';
import * as path from 'path';

/**
 * Determines if a given file in a directory is a directory itself.
 *
 * @param directoryPath - The directory path containing the file.
 * @param fileName - The name of the file.
 * @returns `true` if the file is a directory, `false` otherwise.
 *
 * @example
 * isDirectory('/path/to/directory', 'subdirectory') // returns true
 */
export function isDirectory(directoryPath: string, fileName: string): boolean {
  const fileStat = fs.statSync(path.join(directoryPath, fileName));
  return fileStat.isDirectory();
}
