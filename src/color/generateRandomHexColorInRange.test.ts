import { generateRandomHexColorInRange } from './generateRandomHexColorInRange';

describe('generateRandomHexColorInRange', () => {
  describe('format validation', () => {
    it('should start with #', () => {
      const color = generateRandomHexColorInRange('#000000', '#ffffff');
      expect(color.startsWith('#')).toBe(true);
    });

    it('should have correct length (7 characters)', () => {
      const color = generateRandomHexColorInRange('#000000', '#ffffff');
      expect(color.length).toBe(7);
    });

    it('should match valid hex color format', () => {
      const color = generateRandomHexColorInRange('#000000', '#ffffff');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });
  });

  describe('range boundaries', () => {
    it('should generate colors within specified range', () => {
      const minColor = '#404040';
      const maxColor = '#808080';
      
      for (let i = 0; i < 20; i++) {
        const color = generateRandomHexColorInRange(minColor, maxColor);
        const colorValue = parseInt(color.slice(1), 16);
        const minValue = parseInt(minColor.slice(1), 16);
        const maxValue = parseInt(maxColor.slice(1), 16);
        
        expect(colorValue).toBeGreaterThanOrEqual(minValue);
        expect(colorValue).toBeLessThanOrEqual(maxValue);
      }
    });

    it('should return exact color when min equals max', () => {
      const color = generateRandomHexColorInRange('#123456', '#123456');
      expect(color).toBe('#123456');
    });

    it('should handle full spectrum (black to white)', () => {
      const color = generateRandomHexColorInRange('#000000', '#ffffff');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should respect RGB component boundaries independently', () => {
      // Min: R=0, G=0, B=0; Max: R=255, G=0, B=0 (only red varies)
      const colors = [];
      for (let i = 0; i < 10; i++) {
        colors.push(generateRandomHexColorInRange('#000000', '#ff0000'));
      }
      
      // All colors should have green=00 and blue=00
      colors.forEach(color => {
        expect(color.slice(3, 5)).toBe('00'); // green
        expect(color.slice(5, 7)).toBe('00'); // blue
      });
    });
  });

  describe('hex format handling', () => {
    it('should handle hex codes with # prefix', () => {
      const color = generateRandomHexColorInRange('#000000', '#ffffff');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should handle hex codes without # prefix', () => {
      const color = generateRandomHexColorInRange('000000', 'ffffff');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should handle mixed formats (one with #, one without)', () => {
      const color1 = generateRandomHexColorInRange('#000000', 'ffffff');
      const color2 = generateRandomHexColorInRange('000000', '#ffffff');
      expect(color1).toMatch(/^#[0-9a-f]{6}$/);
      expect(color2).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should handle uppercase hex codes', () => {
      const color = generateRandomHexColorInRange('#FF0000', '#FFFFFF');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });
  });

  describe('default values', () => {
    it('should use default min and max when not provided', () => {
      const color = generateRandomHexColorInRange();
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should use default max when only min provided', () => {
      const color = generateRandomHexColorInRange('#000000');
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    });

    it('should generate any color when using defaults', () => {
      const colors = new Set();
      for (let i = 0; i < 50; i++) {
        colors.add(generateRandomHexColorInRange());
      }
      // Should have good variety with defaults
      expect(colors.size).toBeGreaterThan(40);
    });
  });

  describe('randomness', () => {
    it('should generate different colors on consecutive calls', () => {
      const colors = new Set();
      for (let i = 0; i < 10; i++) {
        colors.add(generateRandomHexColorInRange('#000000', '#ffffff'));
      }
      expect(colors.size).toBeGreaterThanOrEqual(8);
    });

    it('should have good distribution across range', () => {
      const colors = [];
      const minColor = '#000000';
      const maxColor = '#ffffff';
      
      for (let i = 0; i < 100; i++) {
        colors.push(generateRandomHexColorInRange(minColor, maxColor));
      }
      
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBeGreaterThan(90);
    });
  });

  describe('edge cases', () => {
    it('should handle black to black range', () => {
      const color = generateRandomHexColorInRange('#000000', '#000000');
      expect(color).toBe('#000000');
    });

    it('should handle white to white range', () => {
      const color = generateRandomHexColorInRange('#ffffff', '#ffffff');
      expect(color).toBe('#ffffff');
    });

    it('should properly pad RGB components', () => {
      // Generate colors in a range where low values are possible
      const colors = [];
      for (let i = 0; i < 20; i++) {
        colors.push(generateRandomHexColorInRange('#000000', '#000fff'));
      }
      
      // All should be properly formatted with padding
      colors.forEach(color => {
        expect(color).toMatch(/^#[0-9a-f]{6}$/);
        expect(color.length).toBe(7);
      });
    });

    it('should handle narrow ranges', () => {
      const color = generateRandomHexColorInRange('#aaaaaa', '#aaaaab');
      expect(['#aaaaaa', '#aaaaab'].includes(color)).toBe(true);
    });
  });

  describe('specific color ranges', () => {
    it('should generate shades of blue', () => {
      const colors = [];
      for (let i = 0; i < 10; i++) {
        colors.push(generateRandomHexColorInRange('#000066', '#0000ff'));
      }
      
      colors.forEach(color => {
        // Should have R=00, G=00, and B in range 66-ff
        expect(color.slice(1, 3)).toBe('00'); // red
        expect(color.slice(3, 5)).toBe('00'); // green
        const blue = parseInt(color.slice(5, 7), 16);
        expect(blue).toBeGreaterThanOrEqual(0x66);
        expect(blue).toBeLessThanOrEqual(0xff);
      });
    });

    it('should generate grayscale colors in range', () => {
      const colors = [];
      for (let i = 0; i < 10; i++) {
        colors.push(generateRandomHexColorInRange('#333333', '#cccccc'));
      }
      
      colors.forEach(color => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        // All components should be in the range
        expect(r).toBeGreaterThanOrEqual(0x33);
        expect(r).toBeLessThanOrEqual(0xcc);
        expect(g).toBeGreaterThanOrEqual(0x33);
        expect(g).toBeLessThanOrEqual(0xcc);
        expect(b).toBeGreaterThanOrEqual(0x33);
        expect(b).toBeLessThanOrEqual(0xcc);
      });
    });

    it('should generate warm colors', () => {
      const colors = [];
      for (let i = 0; i < 10; i++) {
        colors.push(generateRandomHexColorInRange('#800000', '#ff8800'));
      }
      
      colors.forEach(color => {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        
        expect(r).toBeGreaterThanOrEqual(0x80);
        expect(r).toBeLessThanOrEqual(0xff);
        expect(g).toBeGreaterThanOrEqual(0x00);
        expect(g).toBeLessThanOrEqual(0x88);
        expect(b).toBeGreaterThanOrEqual(0x00);
        expect(b).toBeLessThanOrEqual(0x00);
      });
    });
  });
});
