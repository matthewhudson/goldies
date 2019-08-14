// Adapted from: https://github.com/jeremydaly/lambda-api/blob/master/lib/utils.js
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

export const escapeHtml = html => html.replace(/[&<>"']/g, s => entityMap[s])

// Check if valid S3 path
export const isS3 = path => /^s3:\/\/.+\/.+/i.test(path)

// Parse S3 path
export const parseS3 = path => {
  if (!this.isS3(path)) throw new FileError('Invalid S3 path', { path })
  const s3object = path.replace(/^s3:\/\//i, '').split('/')
  return { Bucket: s3object.shift(), Key: s3object.join('/') }
}
