import { isDefined } from '../types/isDefined'

/**
 * Get the browser's language.
 *
 * @returns The browser's language.
 * @example
 * // returns 'en-US' or other language code
 * const language = getLanguage();
 */
export const getLanguage = (): string => {
  // Check if navigator and navigator.language are defined
  if (typeof navigator === 'undefined' || !navigator.language) {
    return ''; // Return empty string or a default language if navigator is not available
  }
  return navigator.language;
};

/**
 * Get a message based on the provided language.
 *
 * @param language - The language code to get the message for.
 * @returns The message for the specified language or a default message if `i18n` is not defined or window is not available.
 * @example
 * const i18n = { en: 'Hello', es: 'Hola' };
 * // returns 'Hello'
 * const message = getMessage('en');
 */
export const getMessage = (language: string = 'en'): string => {
  // Check if window and window.i18n are defined before accessing
  if (typeof window === 'undefined' || !isDefined(window.i18n)) {
    return 'Missing expected `i18n` global.';
  }
  return window.i18n[language] ?? `Missing message for key: ${language}`;
};
