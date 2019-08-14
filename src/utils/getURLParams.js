/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
export function getParams (url) {
  var params = {}
  var parser = document.createElement('a')
  parser.href = url || window.location.href
  var query = parser.search.substring(1)
  var vars = query.split('&')
  if (vars.length < 1 || vars[0].length < 1) return params
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }
  return params
}
