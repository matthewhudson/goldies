const isDefined = require('../types/isDefined')

export const getLanguage = () => navigator.language || navigator.userLanguage

// Default to english
export const getMessage = (language = 'en') => {
  return isDefined(i18n) ? i18n[language] : 'Missing expected `i18n` global.'
}
