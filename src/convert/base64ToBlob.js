/**
 * Converts a Base64 encoded string to a Blob object
 * @param {string} b64Data - The Base64 encoded string
 * @param {string} [contentType=''] - The MIME content type of the data
 * @param {number} [sliceSize=512] - The size of the slices to process
 * @returns {Blob} - The Blob object containing the decoded data
 * @example
 * const b64String = '...';
 * const contentType = 'image/png';
 * const blob = base64ToBlob(b64String, contentType);
 */
export const base64ToBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteArrays = []

  for (let offset = 0; offset < b64Data.length; offset += sliceSize) {
    const slice = b64Data.slice(offset, offset + sliceSize)
    const byteNumbers = Array.from(slice, char => char.charCodeAt(0))
    const byteArray = new Uint8Array(byteNumbers)
    byteArrays.push(byteArray)
  }

  return new Blob(byteArrays, { type: contentType })
}
