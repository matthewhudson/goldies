import { getContrastRatio } from './getContrastRatio';

describe('getContrastRatio', () => {
  it('returns 21 for black on white', () => {
    expect(getContrastRatio('#000000', '#ffffff')).toBe(21);
  });

  it('returns 1 for a color on itself', () => {
    expect(getContrastRatio('#336699', '#336699')).toBe(1);
  });

  it('gives the same ratio in either order', () => {
    expect(getContrastRatio('#ffffff', '#000000')).toBe(21);
    expect(getContrastRatio('#336699', '#ffffff')).toBe(getContrastRatio('#ffffff', '#336699'));
  });

  it('matches known WCAG ratios', () => {
    // #777 on white just misses the 4.5:1 AA minimum for normal text
    expect(getContrastRatio('#777777', '#ffffff')).toBeCloseTo(4.48, 2);
    expect(getContrastRatio('#767676', '#ffffff')).toBeCloseTo(4.54, 2);
  });

  it('accepts 3-digit colors and colors without a leading #', () => {
    expect(getContrastRatio('000', 'fff')).toBe(21);
  });

  it('throws for invalid colors', () => {
    expect(() => getContrastRatio('#000000', 'white')).toThrow('Invalid hex color: "white"');
  });
});
