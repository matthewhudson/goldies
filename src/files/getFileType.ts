/**
 * Extensions for each file type. Checked in order, so an extension listed
 * twice (such as `webm`) resolves to the first type.
 */
const fileTypeExtensions: Record<string, string[]> = {
  // biome-ignore format: a few extensions per line is easier to scan
  document: [
    'txt', 'pdf', 'rtf', 'doc', 'docx', 'docm', 'dot', 'dotx', 'xls', 'xlsx', 'xlt', 'xltx',
    'ppt', 'pptx', 'pot', 'potx', 'pps', 'ppsx', 'sldx', 'xps', 'odb', 'odc', 'odf', 'odft',
    'odg', 'odi', 'odm', 'odp', 'ods', 'odt', 'otc', 'otg', 'oth', 'oti', 'otp', 'ots', 'ott',
  ],
  // biome-ignore format: a few extensions per line is easier to scan
  video: [
    '3g2', '3gp', 'avi', 'f4v', 'flv', 'h261', 'h263', 'h264', 'jpgv', 'jpm', 'jpx', 'm4u',
    'm4v', 'mkv', 'mov', 'mp4', 'mp4v', 'mpe', 'mpeg', 'mpg', 'mpg4', 'mts', 'mxu', 'ogv',
    'pyv', 'qt', 'vob', 'webm', 'wm', 'wmv', 'wmx', 'wvx',
  ],
  // biome-ignore format: a few extensions per line is easier to scan
  audio: [
    'aa', 'aac', 'aax', 'act', 'aiff', 'alac', 'amr', 'ape', 'au', 'awb', 'dct', 'dss', 'dvf',
    'flac', 'gsm', 'iklax', 'm4a', 'm4b', 'm4p', 'mmf', 'mogg', 'mp3', 'mpc', 'msv', 'nmf',
    'nsf', 'oga', 'ogg', 'opus', 'ra', 'raw', 'rm', 'sln', 'tta', 'vox', 'wav', 'webm', 'wma',
    'wv',
  ],
  archive: ['7z', 'bz2', 'gz', 'gzip', 'rar', 'tar', 'tgz', 'xz', 'zip'],
  // biome-ignore format: a few extensions per line is easier to scan
  image: [
    'ai', 'avif', 'bmp', 'gif', 'heic', 'heif', 'ico', 'jpeg', 'jpg', 'png', 'psd', 'svg',
    'tiff', 'webp',
  ],
};

/**
 * Returns the type of a file based on its extension.
 *
 * @param extension - The file extension to check (`'jpg'`), or a file name or path
 *   (`'photo.jpg'`, `'/tmp/backup.tar.gz'`). Only the text after the last `.` is used,
 *   and matching is case-insensitive.
 * @returns The type of the file (document, video, audio, archive, image, or unknown).
 *
 * @example
 * getFileType('jpg') // returns 'image'
 * getFileType('report.PDF') // returns 'document'
 */
export function getFileType(extension: string): string {
  const normalized = extension.slice(extension.lastIndexOf('.') + 1).toLowerCase();

  for (const fileType in fileTypeExtensions) {
    if (fileTypeExtensions[fileType].includes(normalized)) {
      return fileType;
    }
  }

  return 'unknown';
}
