window.__bufferedErrors = []
window.onerror = function (message, url, line, column, error) {
  window.__bufferedErrors.push({
    message: message,
    url: url,
    line: line,
    column: column,
    error: error
  })
  return false
}
window.addEventListener('load', function () {
  if (window.__bufferedErrors && window.__bufferedErrors.length) {
    if (window.caches && window.caches.keys && window.caches.delete) {
      window.caches.keys().then(function (keys) {
        keys.forEach(function (key) {
          window.caches.delete(key)
        })
      })
    }
    window.__bufferedErrors
      .map(function (error) {
        return normalizeError(error)
      })
      .forEach(function (normalizedError) {
        var request = new XMLHttpRequest()
        request.open('POST', '/client_error/', true)
        request.setRequestHeader(
          'Content-Type',
          'application/json; charset=utf-8'
        )
        request.send(JSON.stringify(normalizedError))
      })
  }
})
