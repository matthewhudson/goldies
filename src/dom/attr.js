/**
 * Set attribute `name` to `val`, or get attr `name`.
 * Derived from: github.com/bpmn-io/min-dom/blob/master/lib/attr.js
 *
 * @example
 * // Get element `style` attribute
 * const style = attr($('.el'), 'style');
 *
 * @example
 * // Remove element `style` attribute
 * attr($('.el'), 'style', null);
 *
 * @example
 * // Set element `id` attribute
 * attr($('.el'), 'id', 'new-element-id');
 *
 * @param {Element} $element - DOM Element
 * @param {string} attributeName - The name of the DOM element attribute.
 * @param {string} [attributeValue] - The new value for the DOM element.
 * @returns {Element|string|null} - Updated element or attribute value.
 */
export function attr ($element, attributeName, attributeValue) {
  // Get attribute
  if (arguments.length === 2) {
    return $element.getAttribute(attributeName)
  }

  // Remove attribute
  if (attributeValue === null) {
    return $element.removeAttribute(attributeName)
  }

  // Set attribute
  $element.setAttribute(attributeName, attributeValue)

  return $element
}
