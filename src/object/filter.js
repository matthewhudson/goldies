/**
 * Create a new object composed of properties that meet specific criteria
 * Adapted from: (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object}   obj      The original object
 * @param  {Function} callback The callback test to run
 * @return {Object}            The new, filtered object
 */
export default function (obj, callback) {
  // Setup a new object
  const filtered = {}

  // Loop through each item in the object and test it
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // If the callback validates true, push item to the new object
      if (callback(obj[key], key, obj)) {
        filtered[key] = obj[key]
      }
    }
  }

  // Return the new object
  return filtered
}
