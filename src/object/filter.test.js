import { filter } from './filter'

describe('filter()', () => {
  test('returns a new object with properties that pass a given test', () => {
    const inputObj = {
      a: 1,
      b: 2,
      c: 3
    }

    const expected = {
      b: 2,
      c: 3
    }

    const result = filter(inputObj, value => value > 1)

    expect(result).toEqual(expected)
  })

  test('returns an empty object when no properties pass the given test', () => {
    const inputObj = {
      a: 1,
      b: 2,
      c: 3
    }

    const expected = {}

    const result = filter(inputObj, value => value > 3)

    expect(result).toEqual(expected)
  })

  test('passes the value, key, and original object to the test function', () => {
    const inputObj = {
      a: 1,
      b: 2,
      c: 3
    }

    const mockCallback = jest.fn(value => value > 1)

    filter(inputObj, mockCallback)

    expect(mockCallback.mock.calls.length).toBe(3)
    expect(mockCallback.mock.calls[0][0]).toBe(1)
    expect(mockCallback.mock.calls[0][1]).toBe('a')
    expect(mockCallback.mock.calls[0][2]).toEqual(inputObj)
  })
})
