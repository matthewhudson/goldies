/**
 * Find the appropriate contrast color (either black or white) for a given hex code.
 * (c) 2019 Matthew Hudson, MIT License, https://hudson.dev
 * Derived from work by Chris Ferdinandi, MIT License, https://gomakethings.com
 *
 * @param {String} [hexCode] Three or six character hex code, with `#` optional.
 * @returns {String} The contrasting color (black or white)
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
  const g = parseInt(hexCode.slice(2, 2), 16)
  const b = parseInt(hexCode.slice(4, 2), 16)

  // Get YIQ ratio
  const yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? '#000000' : '#ffffff'
}
