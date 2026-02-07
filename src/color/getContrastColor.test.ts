import { getContrastColor } from './getContrastColor'

describe('getContrastColor', () => {
  it('should return white for a dark color', () => {
    expect(getContrastColor('#000000')).toBe('#ffffff')
  })

  it('should return black for a light color', () => {
    expect(getContrastColor('#ffffff')).toBe('#000000')
  })

  it('should return black for a neutral color', () => {
    expect(getContrastColor('#888888')).toBe('#000000')
  })

  it('should handle three-digit hex codes', () => {
    expect(getContrastColor('0f0')).toBe('#000000')
  })

  it('should handle leading # symbol', () => {
    expect(getContrastColor('#008000')).toBe('#ffffff')
  })

  it('should handle empty input by defaulting to #008000', () => {
    expect(getContrastColor()).toBe('#ffffff');
  });

  it('should handle invalid hex codes by defaulting to #008000', () => {
    expect(getContrastColor('invalid')).toBe('#ffffff');
  });

  it('should handle non-hex characters by defaulting to #008000', () => {
    expect(getContrastColor('#xyz123')).toBe('#ffffff');
  });
})
