/**
 * Returns all HTML `data-*` attributes attached to an element.
 * 
 * @example Can be used as promise:
 * const dataAttributes = getDataAttributes($el)
 *
 * @param {HTMLElement} $element
 * @return {DOMStringMap} dataset
 */
export function getDataAttributes ($element) {
  return $element.dataset;
}
