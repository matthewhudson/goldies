import { calculateRelativeLuminance } from './calculateRelativeLuminance';

describe('calculateRelativeLuminance', () => {
  describe('primary colors', () => {
    it('should return 0 for black', () => {
      expect(calculateRelativeLuminance('#000000')).toBe(0);
    });

    it('should return 1 for white', () => {
      expect(calculateRelativeLuminance('#ffffff')).toBe(1);
    });

    it('should return approximately 0.2126 for pure red', () => {
      const result = calculateRelativeLuminance('#ff0000');
      expect(result).toBeCloseTo(0.2126, 4);
    });

    it('should return approximately 0.7152 for pure green', () => {
      const result = calculateRelativeLuminance('#00ff00');
      expect(result).toBeCloseTo(0.7152, 4);
    });

    it('should return approximately 0.0722 for pure blue', () => {
      const result = calculateRelativeLuminance('#0000ff');
      expect(result).toBeCloseTo(0.0722, 4);
    });
  });

  describe('hex format handling', () => {
    it('should handle 3-digit hex code', () => {
      expect(calculateRelativeLuminance('000')).toBe(0);
      expect(calculateRelativeLuminance('fff')).toBe(1);
    });

    it('should handle 6-digit hex code', () => {
      expect(calculateRelativeLuminance('000000')).toBe(0);
      expect(calculateRelativeLuminance('ffffff')).toBe(1);
    });

    it('should handle hex code with # prefix', () => {
      expect(calculateRelativeLuminance('#000000')).toBe(0);
      expect(calculateRelativeLuminance('#ffffff')).toBe(1);
    });

    it('should handle hex code without # prefix', () => {
      expect(calculateRelativeLuminance('000000')).toBe(0);
      expect(calculateRelativeLuminance('ffffff')).toBe(1);
    });

    it('should handle mixed case hex codes', () => {
      const lowercase = calculateRelativeLuminance('#ff0000');
      const uppercase = calculateRelativeLuminance('#FF0000');
      const mixedcase = calculateRelativeLuminance('#Ff0000');
      expect(lowercase).toBe(uppercase);
      expect(lowercase).toBe(mixedcase);
    });
  });

  describe('grayscale values', () => {
    it('should return approximately 0.2159 for #808080 (gray)', () => {
      const result = calculateRelativeLuminance('#808080');
      expect(result).toBeCloseTo(0.2159, 4);
    });

    it('should return increasing values for lighter grays', () => {
      const dark = calculateRelativeLuminance('#333333');
      const mid = calculateRelativeLuminance('#888888');
      const light = calculateRelativeLuminance('#cccccc');
      expect(dark).toBeLessThan(mid);
      expect(mid).toBeLessThan(light);
    });
  });

  describe('edge cases', () => {
    it('should use default value #008000 when no argument provided', () => {
      const result = calculateRelativeLuminance();
      expect(result).toBeCloseTo(0.1543, 3);
    });

    it('should handle sRGB threshold boundary (0.03928)', () => {
      // Test color that is close to the sRGB threshold
      const result = calculateRelativeLuminance('#0a0a0a');
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(0.01);
    });

    it('should handle very dark colors', () => {
      const result = calculateRelativeLuminance('#010101');
      expect(result).toBeGreaterThan(0);
      expect(result).toBeLessThan(0.001);
    });

    it('should handle very light colors', () => {
      const result = calculateRelativeLuminance('#fefefe');
      expect(result).toBeGreaterThan(0.99);
      expect(result).toBeLessThan(1);
    });
  });

  describe('luminance ordering', () => {
    it('should return luminance in correct order for different colors', () => {
      const black = calculateRelativeLuminance('#000000');
      const blue = calculateRelativeLuminance('#0000ff');
      const red = calculateRelativeLuminance('#ff0000');
      const green = calculateRelativeLuminance('#00ff00');
      const white = calculateRelativeLuminance('#ffffff');

      expect(black).toBeLessThan(blue);
      expect(blue).toBeLessThan(red);
      expect(red).toBeLessThan(green);
      expect(green).toBeLessThan(white);
    });

    it('should have consistent luminance for same colors in different formats', () => {
      const with3 = calculateRelativeLuminance('f00');
      const with6 = calculateRelativeLuminance('ff0000');
      const withHash = calculateRelativeLuminance('#ff0000');

      expect(with3).toBe(with6);
      expect(with6).toBe(withHash);
    });
  });
});
