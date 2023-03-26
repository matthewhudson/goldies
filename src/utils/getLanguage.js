import { isDefined } from '../types/isDefined'

/**
 * Get the browser's language.
 *
 * @returns {string} The browser's language.
 * @example
 * // returns 'en-US' or other language code
 * const language = getLanguage();
 */
export const getLanguage = () => navigator.language || navigator.userLanguage

/**
 * Get a message based on the provided language.
 *
 * @param {string} [language='en'] - The language code to get the message for.
 * @returns {string} The message for the specified language or a default message if `i18n` is not defined.
 * @example
 * const i18n = { en: 'Hello', es: 'Hola' };
 * // returns 'Hello'
 * const message = getMessage('en');
 */
export const getMessage = (language = 'en') => {
  return isDefined(window.i18n) ? window.i18n[language] : 'Missing expected `i18n` global.'
}
