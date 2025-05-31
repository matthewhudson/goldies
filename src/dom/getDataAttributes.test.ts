import { getDataAttributes } from './getDataAttributes';

describe('getDataAttributes', () => {
  test('returns all data-* attributes from an element', () => {
    const el = document.createElement('div');
    el.dataset.foo = 'bar';
    el.dataset.baz = 'qux';
    const dataset: DOMStringMap = getDataAttributes(el);
    expect(dataset.foo).toBe('bar');
    expect(dataset.baz).toBe('qux');
  });
});
