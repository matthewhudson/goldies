/*!
 * Build a query string from an object of data
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
export function buildQuery (data) {
  if (typeof data === 'string') return data
  var query = []
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    }
  }
  return query.join('&')
}

/*
Here's an alternative version from:
https://github.com/github/fetch/issues/263

const searchParams = Object.keys(params)
  .map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
  })
  .join('&')
*/
