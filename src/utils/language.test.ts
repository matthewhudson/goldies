import { getLanguage, getMessage } from './language'
import { vi } from 'vitest';

// This interface should ideally be in a global type declaration file
// interface I18n {
//   [key: string]: string;
// }

declare global {
  interface Window {
    i18n?: Record<string, string>;
  }
}

describe('getLanguage', () => {
  // Use spyOn for mocking navigator properties

  test('returns the browser language', () => {
    vi.spyOn(global.navigator, 'language', 'get').mockReturnValue('en-US');
    expect(getLanguage()).toBe('en-US');
  });

  // Removed outdated test for userLanguage fallback
});

describe('getMessage', () => {
  // Use Object.defineProperty to mock window.i18n consistently
  const originalWindow = global.window;

  beforeEach(() => {
    // Reset window.i18n before each test
    if (originalWindow) {
      Object.defineProperty(global, 'window', {
        value: { ...originalWindow },
        writable: true,
        configurable: true,
      });
    }
  });

  afterEach(() => {
    // Restore original window after each test
    global.window = originalWindow;
  });

  test('returns the translated message when i18n is available', () => {
    Object.defineProperty(window, 'i18n', {
      value: { en: 'Hello', es: 'Hola' },
      writable: true,
      configurable: true,
    });

    expect(getMessage('en')).toBe('Hello');
    expect(getMessage('es')).toBe('Hola');
    expect(getMessage('fr')).toBe('Missing message for key: fr'); // Should return a message indicating the key is missing
  });

  test('returns the default message if i18n is not available', () => {
    Object.defineProperty(window, 'i18n', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    expect(getMessage('test.key')).toBe('Missing expected `i18n` global.');
  });

  test('returns the default message if window is not available', () => {
    // Temporarily make window unavailable
    const originalWindow = global.window;
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    expect(getMessage('test.key')).toBe('Missing expected `i18n` global.');

    // Restore window
    Object.defineProperty(global, 'window', {
      value: originalWindow,
      writable: true,
      configurable: true,
    });
  });
});
