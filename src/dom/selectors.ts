/**
 * Get the first element in the document matching selector.
 * Shorthand for `querySelector`.
 * 
 * @example
 * const $elA = $('.foo')
 * const $elB = $('#bar')
 * const $elC = $('section')
 * 
 * @param selector - DOM selector
 * @param context - Optional context element for DOM query
 * @returns The first element matching the selector, or null if no match
 */
export function $<T extends Element = Element>(
  selector: string,
  context: Document | Element = document
): T | null {
  return context.querySelector<T>(selector);
}

/**
 * Get all elements in the document matching selector.
 * Shorthand for `querySelectorAll`
 * 
 * @example
 * const $elA = $$('.example')
 * const $elB = $$('input[value]')
 * 
 * @param selector - DOM selector
 * @param context - Optional context element for DOM query
 * @returns A NodeList of all elements matching the selector
 */
export function $$<T extends Element = Element>(
  selector: string,
  context: Document | Element = document
): NodeListOf<T> {
  return context.querySelectorAll<T>(selector);
} 