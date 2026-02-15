import { describe, it, expect } from 'vitest';
import { domify } from './domify';

/**
 * Test suite for the domify function
 */
describe('domify', () => {
  describe('Basic functionality', () => {
    it('should convert simple HTML string to DOM element', () => {
      const result = domify('<p>Hello World</p>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('P');
      expect(result?.textContent).toBe('Hello World');
      expect(result).toBeInstanceOf(HTMLParagraphElement);
    });

    it('should handle self-closing tags', () => {
      const result = domify('<img src="test.jpg" alt="test" />');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('IMG');
      expect(result?.getAttribute('src')).toBe('test.jpg');
      expect(result?.getAttribute('alt')).toBe('test');
      expect(result).toBeInstanceOf(HTMLImageElement);
    });

    it('should handle elements with attributes', () => {
      const result = domify(
        '<a href="https://example.com" class="link" id="test-link">Click me</a>'
      );

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('A');
      expect(result?.getAttribute('href')).toBe('https://example.com');
      expect(result?.getAttribute('class')).toBe('link');
      expect(result?.getAttribute('id')).toBe('test-link');
      expect(result?.textContent).toBe('Click me');
      expect(result).toBeInstanceOf(HTMLAnchorElement);
    });

    it('should handle nested elements', () => {
      const result = domify('<div><span>Nested</span><p>Content</p></div>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.children).toHaveLength(2);
      expect(result?.children[0].tagName).toBe('SPAN');
      expect(result?.children[1].tagName).toBe('P');
      expect(result?.textContent).toBe('NestedContent');
    });
  });

  describe('Multiple elements handling', () => {
    it('should return only the first element when multiple elements are provided', () => {
      const result = domify('<div>First</div><div>Second</div>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe('First');
    });

    it('should handle mixed element types', () => {
      const result = domify('<h1>Title</h1><p>Paragraph</p><span>Span</span>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('H1');
      expect(result?.textContent).toBe('Title');
    });
  });

  describe('Complex HTML structures', () => {
    it('should handle form elements', () => {
      const result = domify(`
        <form action="/submit" method="post">
          <input type="text" name="username" required />
          <button type="submit">Submit</button>
        </form>
      `);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('FORM');
      expect(result?.getAttribute('action')).toBe('/submit');
      expect(result?.getAttribute('method')).toBe('post');
      expect(result?.children).toHaveLength(2);
      expect(result).toBeInstanceOf(HTMLFormElement);
    });

    it('should handle table structures', () => {
      const result = domify(`
        <table>
          <thead>
            <tr><th>Name</th><th>Age</th></tr>
          </thead>
          <tbody>
            <tr><td>John</td><td>30</td></tr>
          </tbody>
        </table>
      `);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('TABLE');
      expect(result?.querySelector('thead')).toBeDefined();
      expect(result?.querySelector('tbody')).toBeDefined();
      expect(result?.querySelectorAll('tr')).toHaveLength(2);
    });

    it('should preserve whitespace in text content', () => {
      const result = domify('<pre>  Line 1\n  Line 2  </pre>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('PRE');
      expect(result?.textContent).toBe('  Line 1\n  Line 2  ');
    });
  });

  describe('Edge cases', () => {
    it('should handle HTML with extra whitespace', () => {
      const result = domify('   <div>Content</div>   ');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe('Content');
    });

    it('should handle HTML comments (they should be ignored)', () => {
      const result = domify('<!-- comment --><div>Content</div>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe('Content');
    });

    it('should handle HTML with DOCTYPE (should be ignored)', () => {
      const result = domify('<!DOCTYPE html><div>Content</div>');

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe('Content');
    });
  });

  describe('Error handling', () => {
    it('should throw TypeError for non-string input', () => {
      // @ts-expect-error - Testing invalid input type
      expect(() => domify(null)).toThrow(TypeError);
      // @ts-expect-error - Testing invalid input type
      expect(() => domify(undefined)).toThrow(TypeError);
      // @ts-expect-error - Testing invalid input type
      expect(() => domify(123)).toThrow(TypeError);
      // @ts-expect-error - Testing invalid input type
      expect(() => domify({})).toThrow(TypeError);
      // @ts-expect-error - Testing invalid input type
      expect(() => domify([])).toThrow(TypeError);
    });

    it('should throw Error for empty string', () => {
      expect(() => domify('')).toThrow(Error);
      expect(() => domify('')).toThrow('HTML string cannot be empty');
    });

    it('should throw Error for whitespace-only string', () => {
      expect(() => domify('   ')).toThrow(Error);
      expect(() => domify('\n\t ')).toThrow(Error);
    });

    it('should throw Error for text-only content', () => {
      expect(() => domify('Just plain text')).toThrow(Error);
      expect(() => domify('Just plain text')).toThrow('No valid HTML elements found');
    });

    it('should throw Error for HTML with only comments', () => {
      expect(() => domify('<!-- just a comment -->')).toThrow(Error);
      expect(() => domify('<!-- comment 1 --><!-- comment 2 -->')).toThrow(Error);
    });
  });

  describe('Type checking', () => {
    it('should return Element type that can be type-narrowed', () => {
      const button = domify('<button type="submit">Submit</button>');

      expect(button).toBeInstanceOf(HTMLButtonElement);

      if (button instanceof HTMLButtonElement) {
        expect(button.type).toBe('submit');
        expect(button.textContent).toBe('Submit');
      }
    });

    it('should work with different HTML element types', () => {
      const input = domify('<input type="email" value="test@example.com" />');

      expect(input).toBeInstanceOf(HTMLInputElement);

      if (input instanceof HTMLInputElement) {
        expect(input.type).toBe('email');
        expect(input.value).toBe('test@example.com');
      }
    });

    it('should handle custom elements', () => {
      const custom = domify('<custom-element data-test="value">Content</custom-element>');

      expect(custom).toBeDefined();
      expect(custom?.tagName).toBe('CUSTOM-ELEMENT');
      expect(custom?.getAttribute('data-test')).toBe('value');
      expect(custom?.textContent).toBe('Content');
    });
  });

  describe('Performance and memory', () => {
    it('should handle large HTML strings efficiently', () => {
      const largeContent = 'x'.repeat(10000);
      const result = domify(`<div>${largeContent}</div>`);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe(largeContent);
    });

    it('should handle deeply nested structures', () => {
      let nestedHtml = '<div>';
      for (let i = 0; i < 100; i++) {
        nestedHtml += `<div data-level="${i}">`;
      }
      nestedHtml += 'Deep content';
      for (let i = 0; i < 100; i++) {
        nestedHtml += '</div>';
      }
      nestedHtml += '</div>';

      const result = domify(nestedHtml);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.textContent).toBe('Deep content');
    });
  });

  describe('Real-world usage patterns', () => {
    it('should work with template literals', () => {
      const name = 'John Doe';
      const age = 30;
      const result = domify(`
        <div class="user-card">
          <h2>${name}</h2>
          <p>Age: ${age}</p>
        </div>
      `);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('DIV');
      expect(result?.className).toBe('user-card');
      expect(result?.querySelector('h2')?.textContent).toBe('John Doe');
      expect(result?.querySelector('p')?.textContent).toBe('Age: 30');
    });

    it('should handle HTML strings from external sources', () => {
      const externalHtml = '<article><h1>Title</h1><p>Content from API</p></article>';
      const result = domify(externalHtml);

      expect(result).toBeDefined();
      expect(result?.tagName).toBe('ARTICLE');
      expect(result?.querySelector('h1')?.textContent).toBe('Title');
      expect(result?.querySelector('p')?.textContent).toBe('Content from API');
    });
  });
});
