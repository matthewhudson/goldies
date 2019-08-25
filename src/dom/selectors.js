/**
 * Get the first element in the document matching selector
 * Shorthand for `querySelector`
 * @example
 * const $elA = $('.foo')
 * const $elB = $('#bar')
 * const $elC = $('section')
 * @param {!string} selector - DOM selector
 * @param {?HTMLElement} [context=document] - context element for DOM query
 * @return {NodeList}
 */
export const $ = document.querySelector.bind(document)

/**
 * Get all elements in the document matching selector
 * Shorthand for `querySelectorAll`
 * @example
 * const $elA = $$('.example')
 * const $elB = $$('input[value]')
 * @param {!string} selector - DOM selector
 * @param {?Element} [context=document] - context element for DOM query
 * @return {NodeList}
 */
export const $$ = document.querySelectorAll.bind(document)
