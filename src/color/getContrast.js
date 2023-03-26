/**
 * Find the appropriate contrast color (either black or white) for a given hex code.
 *
 * @param {string} [hexCode='#008000'] Three or six character hex code, with `#` optional.
 * @returns {string} The contrasting color (black or white).
 * @example
 *
 * getContrast('#ff0000')
 * // => '#ffffff'
 *
 * getContrast('000')
 * // => '#ffffff'
 */
export function getContrast (hexCode = '#008000') {
  // If a leading # is provided, remove it
  if (hexCode.slice(0, 1) === '#') {
    hexCode = hexCode.slice(1)
  }

  // Ensure valid characters
  // Ensure correct length. A hex code is either 3 or 6 characters.

  // If a three-character hexcode, make six-character
  if (hexCode.length === 3) {
    hexCode = hexCode
      .split('')
      .map(function (hexCharacter) {
        return hexCharacter + hexCharacter
      })
      .join('')
  }

  // Convert to RGB value
  const r = parseInt(hexCode.slice(0, 2), 16)
  const g = parseInt(hexCode.slice(2, 4), 16) // corrected slice
  const b = parseInt(hexCode.slice(4, 6), 16) // corrected slice

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? '#000000' : '#ffffff'
}
