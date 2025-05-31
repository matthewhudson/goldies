import { isBrowser } from './isBrowser'

describe('isBrowser', () => {
  test('returns true when running in a browser-like environment', () => {
    expect(isBrowser()).toBe(true)
  })

  test('returns false when running in a non-browser environment', () => {
    const originalWindow = global.window
    delete global.window

    expect(isBrowser()).toBe(false)

    global.window = originalWindow
  })
})
