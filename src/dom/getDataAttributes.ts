/**
 * Returns all HTML `data-*` attributes attached to an element.
 *
 * @example Can be used as promise:
 * const dataAttributes = getDataAttributes($el)
 *
 * @param {HTMLElement} $element
 * @return {DOMStringMap} dataset
 *
 * @deprecated Use `element.dataset`, which this returns. Will be removed in goldies 6.0.
 */
export function getDataAttributes($element: HTMLElement): DOMStringMap {
  return $element.dataset;
}
