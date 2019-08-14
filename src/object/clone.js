/**
 * Create an immutable clone of an object
 * Adapted from: (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} obj The object to clone
 * @return {Object} The clone of the object
 */
export default function clone (obj) {
  // Create new object
  const clone = {}

  // Loop through each item in the original
  // Recursively copy it's value and add to the clone
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = clone(obj[key])
    }
  }

  return clone
}
