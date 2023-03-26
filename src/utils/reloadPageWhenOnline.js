/**
 * Reload the page when the connection is back to get back to the app.
 *
 * @param {Window} windowObject - The window object to attach the event listener to.
 * @example
 * reloadPageWhenOnline(window);
 */
export function reloadPageWhenOnline (windowObject) {
  windowObject.addEventListener('online', () => {
    windowObject.location.reload()
  }, false)
}
