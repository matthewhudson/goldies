/**
 * Shorthand for `querySelector`
 *
 * @param {!string} selector - DOM selector
 * @param {?HTMLElement} [context=document] - context element for DOM query
 * @return {NodeList}
 */
export const $ = document.querySelector.bind(document)

/**
 * Shorthand for `querySelectorAll`
 *
 * @param {!string} selector - DOM selector
 * @param {?Element} [context=document] - context element for DOM query
 * @return {undefined}
 */
export const $$ = document.querySelectorAll.bind(document)
