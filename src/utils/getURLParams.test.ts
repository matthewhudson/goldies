import { getURLParams } from './getURLParams'

describe('getURLParams', () => {
  test('returns an empty object for URLs without parameters', () => {
    const url = 'https://example.com'
    expect(getURLParams(url)).toEqual({})
  })

  test('parses single URL parameters correctly', () => {
    const url = 'https://example.com?param=value'
    expect(getURLParams(url)).toEqual({ param: 'value' })
  })

  test('parses multiple URL parameters correctly', () => {
    const url = 'https://example.com?param1=value1&param2=value2'
    expect(getURLParams(url)).toEqual({ param1: 'value1', param2: 'value2' })
  })

  test('decodes URL-encoded parameter keys and values', () => {
    const url = 'https://example.com?key%20with%20spaces=value%20with%20spaces'
    expect(getURLParams(url)).toEqual({ 'key with spaces': 'value with spaces' })
  })
})
