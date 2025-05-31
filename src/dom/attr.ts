/**
 * Gets, sets, or removes an attribute on a DOM element.
 * This is a type-safe wrapper around the native DOM attribute methods.
 *
 * @param element - The DOM element to operate on.
 * @param name - The name of the attribute to get, set, or remove.
 * @param value - The value to set for the attribute. If null, the attribute will be removed.
 * @returns The element's attribute value when getting, or the element itself when setting/removing.
 * @throws {TypeError} If element is not a valid DOM element or name is not a string.
 * @example
 * // Get an attribute
 * const style = attr(element, 'style');
 * 
 * // Set an attribute
 * attr(element, 'id', 'new-element-id');
 * 
 * // Remove an attribute
 * attr(element, 'data-temp', null);
 */
export function attr(
  element: Element,
  name: string,
  value?: string | null
): string | null | Element {
  if (!(element instanceof Element)) {
    throw new TypeError('First argument must be a DOM element');
  }

  if (typeof name !== 'string') {
    throw new TypeError('Attribute name must be a string');
  }

  // Get attribute
  if (arguments.length === 2) {
    return element.getAttribute(name);
  }

  // Remove attribute
  if (value === null) {
    element.removeAttribute(name);
    return element;
  }

  // Set attribute
  if (typeof value !== 'string' && value !== undefined) {
    throw new TypeError('Attribute value must be a string or null');
  }

  element.setAttribute(name, value ?? '');
  return element;
}
