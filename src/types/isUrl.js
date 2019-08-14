export function isValidURL (str) {
  var a = document.createElement('a')
  a.href = str
  return a.host && a.host != window.location.host
}
