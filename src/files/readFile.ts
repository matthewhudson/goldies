import * as fs from 'fs/promises';

/**
 * Reads a file and returns a promise that resolves with the file's contents.
 *
 * @param path - The path of the file to read.
 * @returns A promise that resolves with the file's contents.
 * @example
 * const fileContents = await readFile('/path/to/file.txt');
 */
export async function readFile(path: string): Promise<string> {
  return fs.readFile(path, 'utf-8');
}
