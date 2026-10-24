import * as fs from 'node:fs';
import * as path from 'node:path';

/**
 * Recursively reads a directory and returns an array of all files.
 *
 * @param directoryPath - The directory path to read.
 * @returns An array of file paths.
 *
 * @example
 * getDirectoryTree('/path/to/directory') // returns ['/path/to/directory/file1.txt', '/path/to/directory/subdirectory/file2.txt', ...]
 *
 * @deprecated Use `readdirSync` from `node:fs`, which can list a directory recursively:
 * ```ts
 * readdirSync(dir, { recursive: true, withFileTypes: true })
 *   .filter((entry) => entry.isFile())
 *   .map((entry) => path.join(entry.parentPath, entry.name));
 * ```
 * Will be removed in goldies 6.0.
 */
export function getDirectoryTree(directoryPath: string): string[] {
  const directoryItems = fs.readdirSync(directoryPath);
  const filelist: string[] = [];

  directoryItems.forEach((file: string) => {
    const filePath = path.join(directoryPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      filelist.push(...getDirectoryTree(filePath));
    } else {
      filelist.push(filePath);
    }
  });

  return filelist;
}
