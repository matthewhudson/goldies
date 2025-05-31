import { attr } from './attr';

describe.skip('attr', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
    element.setAttribute('id', 'test');
    element.setAttribute('class', 'test-class');
    element.setAttribute('data-test', 'test-value');
  });

  test('gets an attribute value', () => {
    expect(attr(element, 'id')).toBe('test');
    expect(attr(element, 'class')).toBe('test-class');
    expect(attr(element, 'data-test')).toBe('test-value');
  });

  test('returns null for non-existent attribute', () => {
    expect(attr(element, 'nonexistent')).toBeNull();
  });

  test('sets an attribute value', () => {
    const result = attr(element, 'title', 'new title');
    expect(element.getAttribute('title')).toBe('new title');
    expect(result).toBe(element);
  });

  test('removes an attribute when value is null', () => {
    const result = attr(element, 'class', null);
    expect(element.hasAttribute('class')).toBe(false);
    expect(result).toBe(element);
  });

  test('handles empty string value', () => {
    const result = attr(element, 'empty', '');
    expect(element.getAttribute('empty')).toBe('');
    expect(result).toBe(element);
  });

  test('handles undefined value', () => {
    const result = attr(element, 'undefined', undefined);
    expect(element.getAttribute('undefined')).toBe('');
    expect(result).toBe(element);
  });

  test('throws TypeError for non-Element first argument', () => {
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(null, 'id')).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(undefined, 'id')).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr('not-an-element', 'id')).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr({}, 'id')).toThrow(TypeError);
  });

  test('throws TypeError for non-string attribute name', () => {
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, null)).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, undefined)).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, 123)).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, {})).toThrow(TypeError);
  });

  test('throws TypeError for invalid attribute value', () => {
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, 'id', 123)).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, 'id', {})).toThrow(TypeError);
    // @ts-expect-error - Testing invalid input type
    expect(() => attr(element, 'id', [])).toThrow(TypeError);
  });

  test('handles special characters in attribute values', () => {
    const specialValue = 'test "quotes" & <tags>';
    const result = attr(element, 'data-special', specialValue);
    expect(element.getAttribute('data-special')).toBe(specialValue);
    expect(result).toBe(element);
  });

  test('handles boolean attributes', () => {
    const result = attr(element, 'disabled', '');
    expect(element.getAttribute('disabled')).toBe('');
    expect(result).toBe(element);
  });

  test('handles custom data attributes', () => {
    const result = attr(element, 'data-custom', 'custom-value');
    expect(element.getAttribute('data-custom')).toBe('custom-value');
    expect(result).toBe(element);
  });

  test('handles aria attributes', () => {
    const result = attr(element, 'aria-label', 'Accessibility label');
    expect(element.getAttribute('aria-label')).toBe('Accessibility label');
    expect(result).toBe(element);
  });

  test('handles SVG elements', () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const result = attr(svg, 'viewBox', '0 0 100 100');
    expect(svg.getAttribute('viewBox')).toBe('0 0 100 100');
    expect(result).toBe(svg);
  });
});
