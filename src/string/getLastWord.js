/**
 * @param {?string} text
 * @return {?string}
 */
axs.properties.getLastWord = function (text) {
  if (!text) return null

  // TODO: this makes a lot of assumptions.
  var lastSpace = text.lastIndexOf(' ') + 1
  var MAXLENGTH = 10
  var cutoff = text.length - MAXLENGTH
  var wordStart = lastSpace > cutoff ? lastSpace : cutoff
  return text.substring(wordStart)
}
