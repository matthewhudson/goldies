import { getQueryString } from './getQueryString'

describe('getQueryString', () => {
  test('returns null for a non-existent query parameter', () => {
    const url = 'https://example.com?param1=value1&param2=value2'
    const value = getQueryString('param3', url)
    expect(value).toBeNull()
  })

  test('returns the value of the specified query parameter', () => {
    const url = 'https://example.com?param1=value1&param2=value2'
    const value = getQueryString('param1', url)
    expect(value).toEqual('value1')
  })

  test('uses window.location.href as the default URL', () => {
    // Mock window.location.href
    const originalLocation = window.location
    delete window.location
    window.location = { href: 'https://example.com?param1=value1' }

    const value = getQueryString('param1')
    expect(value).toEqual('value1')

    // Restore window.location.href
    window.location = originalLocation
  })
})
