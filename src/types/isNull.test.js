import { isNull } from './isNull'

describe('isNull', () => {
  it('should return true if value is null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return false if value is not null', () => {
    expect(isNull(undefined)).toBe(false)
    expect(isNull('')).toBe(false)
    expect(isNull(0)).toBe(false)
    expect(isNull(false)).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull([])).toBe(false)
  })
})
