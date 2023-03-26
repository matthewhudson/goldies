import { isUndefined } from './isUndefined'

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('should return false for null', () => {
    expect(isUndefined(null)).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(isUndefined('')).toBe(false)
  })

  it('should return false for a number', () => {
    expect(isUndefined(123)).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isUndefined({})).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isUndefined([])).toBe(false)
  })
})
