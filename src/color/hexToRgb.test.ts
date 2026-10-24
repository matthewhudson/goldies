import { hexToRgb } from './hexToRgb';

describe('hexToRgb', () => {
  it('converts a 6-digit hex color', () => {
    expect(hexToRgb('#ff8000')).toEqual({ r: 255, g: 128, b: 0 });
  });

  it('converts a 3-digit hex color', () => {
    expect(hexToRgb('#f80')).toEqual({ r: 255, g: 136, b: 0 });
  });

  it('accepts colors without a leading #', () => {
    expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb('fff')).toEqual({ r: 255, g: 255, b: 255 });
  });

  it('ignores case', () => {
    expect(hexToRgb('#ABCDEF')).toEqual(hexToRgb('#abcdef'));
  });

  it('throws for strings that are not 3- or 6-digit hex colors', () => {
    for (const invalid of ['', '#', 'invalid', '#ff00', '#ff00000', '#ggg', '##fff', ' #fff']) {
      expect(() => hexToRgb(invalid)).toThrow(`Invalid hex color: "${invalid}"`);
    }
  });
});
