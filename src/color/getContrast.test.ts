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

  it('should handle empty input by defaulting to #008000', () => {
    expect(getContrast()).toBe('#ffffff');
  });

  it('should handle invalid hex codes by defaulting to #008000', () => {
    expect(getContrast('invalid')).toBe('#ffffff');
  });

  it('should handle non-hex characters by defaulting to #008000', () => {
    expect(getContrast('#xyz123')).toBe('#ffffff');
  });
})
