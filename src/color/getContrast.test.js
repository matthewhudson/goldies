import { getContrast } from './getContrast'

describe('getContrast', () => {
  it('should return white for a dark color', () => {
    expect(getContrast('#000000')).toBe('#ffffff')
  })

  it('should return black for a light color', () => {
    expect(getContrast('#ffffff')).toBe('#000000')
  })

  it('should return black for a neutral color', () => {
    expect(getContrast('#888888')).toBe('#000000')
  })

  it('should handle three-digit hex codes', () => {
    expect(getContrast('0f0')).toBe('#000000')
  })

  it('should handle leading # symbol', () => {
    expect(getContrast('#008000')).toBe('#ffffff')
  })
})
