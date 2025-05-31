import { addClass, hasClass, removeClass, toggleClass } from './classes';

describe('DOM class utilities', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');
  });

  test('addClass adds a class', () => {
    addClass(el, 'foo');
    expect(el.classList.contains('foo')).toBe(true);
  });

  test('hasClass checks for a class', () => {
    el.classList.add('bar');
    expect(hasClass(el, 'bar')).toBe(true);
    expect(hasClass(el, 'baz')).toBe(false);
  });

  test('removeClass removes a class', () => {
    el.classList.add('baz');
    removeClass(el, 'baz');
    expect(el.classList.contains('baz')).toBe(false);
  });

  test('toggleClass toggles a class', () => {
    expect(toggleClass(el, 'toggle')).toBe(true);
    expect(el.classList.contains('toggle')).toBe(true);
    expect(toggleClass(el, 'toggle')).toBe(false);
    expect(el.classList.contains('toggle')).toBe(false);
  });
});
