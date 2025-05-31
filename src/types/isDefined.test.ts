import { isDefined } from './isDefined'

describe('isDefined', () => {
  it('returns true for defined values', () => {
    expect(isDefined(null)).toBe(true)
    expect(isDefined(undefined)).toBe(false)
    expect(isDefined('')).toBe(true)
    expect(isDefined(0)).toBe(true)
    expect(isDefined(false)).toBe(true)
  })

  it('returns false for undefined values', () => {
    let test
    expect(isDefined(test)).toBe(false)
  })
})
