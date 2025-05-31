/**
 * Reloads the page when the internet connection is restored.
 * This is useful for Single Page Applications (SPAs) to ensure the app is in sync
 * with the server after a connection loss.
 *
 * @param windowObject - The window object to attach the event listener to. Defaults to the global window object.
 * @throws {TypeError} If windowObject is not provided and global window is undefined.
 * @example
 * // Using the global window object
 * reloadPageWhenOnline();
 * 
 * // Using a specific window object (useful for testing)
 * reloadPageWhenOnline(customWindow);
 */
export function reloadPageWhenOnline(windowObject: Window = window): void {
  if (!windowObject) {
    throw new TypeError('Window object is required');
  }

  const handleOnline = (): void => {
    try {
      windowObject.location.reload();
    } catch (error) {
      console.error('Failed to reload page:', error);
    }
  };

  windowObject.addEventListener('online', handleOnline, { once: true });
}
