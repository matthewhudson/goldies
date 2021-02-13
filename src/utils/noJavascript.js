//<html lang="en" class="no-js logged-in client-root">

;(function () {
  var docElement = document.documentElement
  var classRE = new RegExp('(^|\\s)no-js(\\s|$)')
  var className = docElement.className
  docElement.className = className.replace(classRE, '$1js$2')
})()
