// Check if valid S3 path
export const isS3 = path => /^s3:\/\/.+\/.+/i.test(path)

// Parse S3 path
export const parseS3 = path => {
  if (!isS3(path)) throw new Error('Invalid S3 path', { path })
  const s3object = path.replace(/^s3:\/\//i, '').split('/')
  return { Bucket: s3object.shift(), Key: s3object.join('/') }
}
