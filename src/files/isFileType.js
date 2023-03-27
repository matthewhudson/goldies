export function getFileType (extension) {
  const fileExtensionRegexes = {
    document: /\.(txt|docm|xps|odc|otc|odb|odf|odft|odg|otg|odi|oti|odp|otp|ods|ots|odt|odm|ott|oth|pptx|sldx|ppsx|potx|xlsx|xltx|docx|dotx)$/,
    video: /\.(3gp|3g2|h261|h263|h264|jpgv|jpm|jpgm|mj2|mjp2|ts|mp4|mp4v|mpg4|mpeg|mpg|mpe|m1v|m2v|ogv|qt|mov|uvh|uvvh|uvm|uvvm|uvp|uvvp|uvs|uvvs|uvv|uvvv|dvb|fvt|mxu|m4u|pyv|uvu|uvvu|viv|webm|f4v|fli|flv|m4v|mkv|mk3d|mks|mng|asf|asx|vob|wm|wmv|wmx|wvx|avi|movie|smv)$/,
    audio: /\.(adp|au|snd|mid|midi|kar|rmi|m4a|mp3|mpga|mp2|mp2a|m2a|m3a|oga|ogg|spx|s3m|sil|uva|uvva|eol|dra|dts|dtshd|lvp|pya|rip|weba|aac|aif|aiff|aifc|caf|flac|mka|m3u|wax|wma|ra|rmp|wav)$/,
    archive: /\.(zip|rar|jar|apk|xpi|crx|joda|tao)$/,
    image: /\.(bmp|cgm|g3|gif|ief|jpeg|jpg|jpe|ktx|png|btif|sgi|svg|svgz|tiff|tif|psd|uvi|uvvi|uvg|uvvg|djv|sub|dwg|dxf|fbs|fpx|fst|mmr|rlc|mdi|wdp|npx|wbmp|xif|webp|3ds|ras|cmx|fh|fhc|fh4|fh5|fh7|ico|sid|pcx|pic|pct|pnm|pbm|pgm|ppm|rgb|tga|xbm|xpm|xwd)$/
  };

  for (const fileType in fileExtensionRegexes) {
    if (fileExtensionRegexes[fileType].test(extension)) {
      return fileType
    }
  }

  return 'unknown'
}
