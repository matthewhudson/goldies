import { buildQuery } from './buildQuery'

describe('buildQuery', () => {
  test('builds a query string from an object of data', () => {
    const data = { param1: 'value1', param2: 'value2' }
    const queryString = buildQuery(data)
    expect(queryString).toEqual('param1=value1&param2=value2')
  })

  test('returns the input string unchanged', () => {
    const inputString = 'param1=value1&param2=value2'
    const queryString = buildQuery(inputString)
    expect(queryString).toEqual(inputString)
  })

  test('encodes URL special characters in the keys and values', () => {
    const data = { 'param with spaces': 'value with spaces' }
    const queryString = buildQuery(data)
    expect(queryString).toEqual('param%20with%20spaces=value%20with%20spaces')
  })
})
