/**
 * Check if an element has a given CSS class name.
 *
 * @example
 * const result = hasClass($element, 'some-class-to-check')
 *
 * @param {DOMElement} $element - A DOM element to check.
 * @param {String} className - A class to check the DOM element for.
 * @returns {Boolean} Returns true if element has class, false if not.
 *
 * @deprecated Use `element.classList.contains(className)`. Will be removed in goldies 6.0.
 */
export function hasClass($element: Element, className: string): boolean {
  return $element.classList.contains(className);
}

/**
 * Add a CSS class name to an element.
 *
 * @example
 * addClass($element, 'another-class')
 *
 * @param {DOMElement} $element - A DOM element to check.
 * @param {String} className - A class to add to the DOM element.
 *
 * @deprecated Use `element.classList.add(className)`. Will be removed in goldies 6.0.
 */
export function addClass($element: Element, className: string): void {
  $element.classList.add(className);
}

/**
 * Remove a CSS class name from an element.
 *
 * @example
 * removeClass($element, 'another-class')
 *
 * @param {DOMElement} $element - A DOM element to remove the class name from.
 * @param {String} className - A class to remove from the DOM element.
 *
 * @deprecated Use `element.classList.remove(className)`. Will be removed in goldies 6.0.
 */
export function removeClass($element: Element, className: string): void {
  $element.classList.remove(className);
}

/**
 * Toggle a CSS class name from an element.
 *
 * @example
 * toggleClass($element, 'another-class')
 *
 * @param {DOMElement} $element - A DOM element to toggle the class name on.
 * @param {String} className - A class to toggle off/on the DOM element.
 *
 * @deprecated Use `element.classList.toggle(className)`. Will be removed in goldies 6.0.
 */
export function toggleClass($element: Element, className: string): boolean {
  return $element.classList.toggle(className);
}
