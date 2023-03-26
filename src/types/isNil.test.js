import { isNil } from './isNil'

describe('isNil', () => {
  it('should return true for null', () => {
    expect(isNil(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isNil(undefined)).toBe(true)
  })

  it('should return false for NaN', () => {
    expect(isNil(NaN)).toBe(false)
  })

  it('should return false for non-nullish values', () => {
    expect(isNil(0)).toBe(false)
    expect(isNil('')).toBe(false)
    expect(isNil(false)).toBe(false)
    expect(isNil({})).toBe(false)
    expect(isNil([])).toBe(false)
  })
})
