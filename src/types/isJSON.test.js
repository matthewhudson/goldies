import { isJSON } from './isJSON'

describe('isJSON', () => {
  it('should return true if input is valid JSON', () => {
    expect(isJSON('{"foo": "bar"}')).toBe(true)
  })

  it('should return false if input is invalid JSON', () => {
    expect(isJSON('{foo: "bar"}')).toBe(false)
  })

  it('should return false if input is not a string', () => {
    expect(isJSON(123)).toBe(false)
  })
})
