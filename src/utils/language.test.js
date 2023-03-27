import { getLanguage, getMessage } from './language'

describe('getLanguage', () => {
  const originalNavigator = global.navigator

  afterEach(() => {
    global.navigator = originalNavigator
  })

  test('returns the browser language', () => {
    global.navigator = { language: 'en-US', userLanguage: undefined }
    expect(getLanguage()).toBe('en-US')
  })

  test('returns the userLanguage if language is not available', () => {
    global.navigator = { language: undefined, userLanguage: 'en-US' }
    expect(getLanguage()).toBe('en-US')
  })
})

describe('getMessage', () => {
  const originalI18n = global.window.i18n

  afterEach(() => {
    global.window.i18n = originalI18n
  })

  test('returns the message for the specified language', () => {
    global.window.i18n = { en: 'Hello', es: 'Hola' }
    expect(getMessage('en')).toBe('Hello')
    expect(getMessage('es')).toBe('Hola')
  })

  test('returns a default message if i18n is not defined', () => {
    global.window.i18n = undefined
    expect(getMessage('en')).toBe('Missing expected `i18n` global.')
  })
})
