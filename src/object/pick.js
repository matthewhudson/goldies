/**
 * Create a new object composed of properties picked from another object
 * Adapted from: (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} obj   The object to pick properties from
 * @param  {Array}  props An array of properties to use
 * @return {Object}       The new object
 */
export const pick = (obj, props) => {
  // Make sure object and properties are provided
  if (!obj || !props) return

  // Create new object
  const picked = {}

  // Loop through props and push to new object
  props.forEach(prop => {
    picked[prop] = obj[prop]
  })

  // Return new object
  return picked
}
