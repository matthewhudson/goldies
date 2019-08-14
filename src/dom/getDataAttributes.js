/**
 * Returns all HTML `data-*` attributes attached to an element
 * .
 * @example Can be used as promise:
 * const $el = getDataAttributes($el)
 *
 * @param {HTMLElement} $el
 * @param {DOMStringMap} dataset
 */
export const getDataAttributes = $el => $el.dataset
