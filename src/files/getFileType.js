/**
 * Returns the type of a file based on its extension
 *
 * @param {string} extension - The file extension to check
 * @returns {string} The type of the file (document, video, audio, archive, image, or unknown)
 *
 * @example
 * getFileType('jpg') // returns 'image'
 */
export function getFileType (extension) {
  const fileExtensionRegexes = {
    document: /(txt|docm|xps|odc|otc|odb|odf|odft|odg|otg|odi|oti|odp|otp|ods|ots|odt|odm|ott|oth|pptx|sldx|ppsx|potx|xlsx|xltx|docx|dotx)$/i,
    video: /(3g2|3gp|h261|h263|h264|jpgv|jpm|jpx|mp4|mp4v|mpe|mpeg|mpg|mpg4|mts|mxu|m4u|pyv|qt|vob|webm|wm|wmv|wmx|wvx|mkv|flv|f4v)$/i,
    audio: /(aa|aac|aax|act|aiff|alac|amr|ape|au|awb|dct|dss|dvf|flac|gsm|iklax|m4a|m4b|m4p|mmf|mp3|mpc|msv|nmf|nsf|ogg|oga|mogg|opus|ra|rm|raw|sln|tta|vox|wav|wma|wv|webm)$/i,
    archive: /(zip|rar|tar|gzip|gz|7z|xz|bz2)$/i,
    image: /(jpeg|jpg|bmp|gif|png|tiff|webp|psd|ai|svg)$/i
  }

  for (const fileType in fileExtensionRegexes) {
    if (fileExtensionRegexes[fileType].test(extension)) {
      return fileType
    }
  }

  return 'unknown'
}
