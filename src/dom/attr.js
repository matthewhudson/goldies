/**
 * Set attribute `name` to `val`, or get attr `name`.
 * Derived from: github.com/bpmn-io/min-dom/blob/master/lib/attr.js
 *
 * @example <caption>Get element `style` attribute</caption>
 * const style = attr($('.el'), 'style')
 * 
 * @example <caption>Remove element `style` attribute</caption>
 * attr($('.el') 'style', null)
 * 
 * @example <caption>Set element `id` attribute</caption>
 * attr($('.el'), 'id', 'new-element-id')
 * 
 * @param {Element} $element - DOM Element
 * @param {String} attributeName - The name of the DOM element attribute.
 * @param {String} [attributeValue] - The new value for the DOM element.
 * @returns {*} 
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
