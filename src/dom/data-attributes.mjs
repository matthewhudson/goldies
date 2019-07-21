/**
 * Returns all HTML `data-*` attributes attached to an element.
 *
 * @param {HTMLElement} $el
 * @param {DOMStringMap} dataset
 */
export const dattrs = (getAllDataAttributes = $el => $el.dataset)
