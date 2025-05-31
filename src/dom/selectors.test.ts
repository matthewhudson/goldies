import { $, $$ } from './selectors';

describe.skip('$ (single selector)', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div id="a" class="foo"></div>
      <div id="b" class="bar"></div>
      <section><span class="foo"></span></section>
    `;
  });

  test('selects the first matching element', () => {
    const el = $('.foo');
    expect(el).toBeInstanceOf(HTMLDivElement);
    expect(el?.id).toBe('a');
  });

  test('returns null if no match', () => {
    expect($('.notfound')).toBeNull();
  });

  test('selects within a context', () => {
    const section = document.querySelector('section')!;
    const el = $('.foo', section);
    expect(el).toBeInstanceOf(HTMLSpanElement);
  });
});

describe.skip('$$ (multiple selector)', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="foo"></div>
      <div class="foo"></div>
      <span class="foo"></span>
    `;
  });

  test('selects all matching elements', () => {
    const nodeList = $$('.foo');
    expect(nodeList.length).toBe(3);
    expect(Array.from(nodeList).every((el) => el.classList.contains('foo'))).toBe(true);
  });

  test('returns empty NodeList if no match', () => {
    const nodeList = $$('.notfound');
    expect(nodeList.length).toBe(0);
  });

  test('selects within a context', () => {
    const div = document.createElement('div');
    div.innerHTML = '<span class="foo"></span><span></span>';
    const nodeList = $$('.foo', div);
    expect(nodeList.length).toBe(1);
    expect(nodeList[0]).toBeInstanceOf(HTMLSpanElement);
  });
});
