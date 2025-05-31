/**
 * Check if the given path is a valid S3 path.
 *
 * @param path - The path to check.
 * @returns True if the path is a valid S3 path, otherwise false.
 * @example
 * const validS3Path = 's3://bucket-name/key-name';
 * // returns true
 * const isValid = isS3(validS3Path);
 */
export const isS3 = (path: string): boolean => /^s3:\/\/.+\/.+/i.test(path);

/**
 * Parse an S3 path and return the bucket and key.
 *
 * @param path - The S3 path to parse.
 * @returns An object containing the Bucket and Key properties.
 * @throws {Error} If the path is not a valid S3 path.
 * @example
 * const s3Path = 's3://bucket-name/key-name';
 * // returns { Bucket: 'bucket-name', Key: 'key-name' }
 * const parsed = parseS3(s3Path);
 */
export const parseS3 = (path: string): { Bucket: string; Key: string } => {
  if (!isS3(path)) throw new Error('Invalid S3 path');
  const s3object: string[] = path.replace(/^s3:\/\//i, '').split('/');
  return { Bucket: s3object.shift()!, Key: s3object.join('/') };
};
