import { generateRandomHexColor } from './generateRandomHexColor';

describe('generateRandomHexColor', () => {
  describe('format validation', () => {
    it('should start with #', () => {
      const color = generateRandomHexColor();
      expect(color.startsWith('#')).toBe(true);
    });

    it('should have correct length (7 characters)', () => {
      const color = generateRandomHexColor();
      expect(color.length).toBe(7);
    });

    it('should match valid hex color format', () => {
      const color = generateRandomHexColor();
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should only contain valid hex characters', () => {
      const color = generateRandomHexColor();
      const hexPart = color.slice(1);
      expect(hexPart).toMatch(/^[0-9a-f]+$/);
    });
  });

  describe('randomness', () => {
    it('should generate different colors on consecutive calls', () => {
      const colors = new Set();
      for (let i = 0; i < 10; i++) {
        colors.add(generateRandomHexColor());
      }
      // With 10 random colors, we should have at least 8 unique ones (high probability)
      expect(colors.size).toBeGreaterThanOrEqual(8);
    });

    it('should generate colors across valid hex range', () => {
      const colors = [];
      for (let i = 0; i < 100; i++) {
        colors.push(generateRandomHexColor());
      }
      
      // Check that we're getting some variety in the colors
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBeGreaterThan(90); // Should have high variety
    });
  });

  describe('output characteristics', () => {
    it('should return lowercase hex digits', () => {
      const color = generateRandomHexColor();
      const hexPart = color.slice(1);
      expect(hexPart).toBe(hexPart.toLowerCase());
    });

    it('should properly pad short hex values with zeros', () => {
      // Mock Math.random to return a small value that needs padding
      const originalRandom = Math.random;
      Math.random = (): number => 0.000001;
      
      const color = generateRandomHexColor();
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
      expect(color.length).toBe(7);
      
      Math.random = originalRandom;
    });
  });

  describe('edge cases', () => {
    it('should handle Math.random returning 0', () => {
      const originalRandom = Math.random;
      Math.random = (): number => 0;
      
      const color = generateRandomHexColor();
      expect(color).toBe('#000000');
      
      Math.random = originalRandom;
    });

    it('should handle Math.random returning close to 1', () => {
      const originalRandom = Math.random;
      Math.random = (): number => 0.999999;
      
      const color = generateRandomHexColor();
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
      expect(color.length).toBe(7);
      
      Math.random = originalRandom;
    });

    it('should generate valid colors in repeated calls', () => {
      for (let i = 0; i < 20; i++) {
        const color = generateRandomHexColor();
        expect(color).toMatch(/^#[0-9a-f]{6}$/);
      }
    });
  });

  describe('color range', () => {
    it('should be able to generate colors in various ranges', () => {
      const colors = [];
      for (let i = 0; i < 50; i++) {
        colors.push(generateRandomHexColor());
      }

      // Check we have some darker colors (first char after # is 0-7)
      const hasDarkColors = colors.some(c => '01234567'.includes(c[1]));
      // Check we have some lighter colors (first char after # is 8-f)
      const hasLightColors = colors.some(c => '89abcdef'.includes(c[1]));

      expect(hasDarkColors).toBe(true);
      expect(hasLightColors).toBe(true);
    });
  });
});
