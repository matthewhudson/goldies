import { toBase64 } from './toBase64'

describe('toBase64', () => {
  test('encodes a string to Base64', () => {
    const inputString = 'hello world'
    const expected = 'aGVsbG8gd29ybGQ='
    const result = toBase64(inputString)

    expect(result).toBe(expected)
  })

  test('handles empty input', () => {
    const expected = ''
    const result = toBase64()

    expect(result).toBe(expected)
  })

  test('encodes non-ASCII characters', () => {
    const inputString = 'こんにちは世界'
    const expected = '44GT44KT44Gr44Gh44Gv5LiW55WM'
    const result = toBase64(inputString)

    expect(result).toBe(expected)
  })
})
