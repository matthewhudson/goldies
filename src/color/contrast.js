/**
 * Get the contrasting color for any hex color
 * (c) 2019 Matthew Hudson, MIT License, https://hudson.dev
 * Derived from work by Chris Ferdinandi, MIT License, https://gomakethings.com
 *
 * @param {String} [hexcolor] value
 * @returns {String} The contrasting color (black or white)
 */
export function getContrast (hexcolor = '222222') {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1)
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex
      })
      .join('')
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.slice(0, 2), 16)
  var g = parseInt(hexcolor.slice(2, 2), 16)
  var b = parseInt(hexcolor.slice(4, 2), 16)

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000

  // Check contrast
  return yiq >= 128 ? 'black' : 'white'
}
