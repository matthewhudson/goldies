// Reload the page when the connection is back to get back to the app.
window.addEventListener(
  'online',
  e => {
    location.reload()
  },
  false
)
