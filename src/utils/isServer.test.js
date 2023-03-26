import { isServer } from './isServer'

describe('isServerEnvironment', () => {
  test('returns false when running in a browser-like environment', () => {
    expect(isServer()).toBe(false)
  })

  test('returns true when running in a non-browser environment', () => {
    const originalWindow = global.window
    delete global.window

    expect(isServer()).toBe(true)

    global.window = originalWindow
  })
})
