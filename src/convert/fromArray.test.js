import { fromArray } from './fromArray'

describe('fromArray', () => {
  test('converts an array to a comma-separated string', () => {
    const inputArray = ['a', 'b', 'c']
    const expected = 'a,b,c'
    const result = fromArray(inputArray)

    expect(result).toBe(expected)
  })

  test('returns undefined when input is not an array', () => {
    const input = 'not an array'
    const result = fromArray(input)

    expect(result).toBeUndefined()
  })

  test('handles empty array input', () => {
    const inputArray = []
    const expected = ''
    const result = fromArray(inputArray)

    expect(result).toBe(expected)
  })
})
