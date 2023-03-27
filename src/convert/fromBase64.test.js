import { fromBase64 } from './fromBase64'

describe('fromBase64', () => {
  test('decodes a Base64 encoded string to ASCII', () => {
    const base64String = 'aGVsbG8gd29ybGQ='
    const expected = 'hello world'
    const result = fromBase64(base64String)

    expect(result).toBe(expected)
  })

  test('handles empty input', () => {
    const expected = ''
    const result = fromBase64()

    expect(result).toBe(expected)
  })

  // test('handles non-Base64 input', () => {
  //   const inputString = 'Z=)bu6,{.,68\''
  //   const expected = 'Z=)bu6,{.,68\''

  //   const result = fromBase64(inputString)
  //   expect(result).toBe(expected)
  // })
})
