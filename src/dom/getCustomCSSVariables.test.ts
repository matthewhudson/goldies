import { getCustomCSSVariables } from './getCustomCSSVariables';

describe('getCustomCSSVariables', () => {
  beforeAll(() => {
    const style = document.createElement('style');
    style.textContent = ':root { --main-color: #fff; --secondary-color: #000; }';
    document.head.appendChild(style);
  });

  test('extracts custom CSS variables from :root', () => {
    const variables = getCustomCSSVariables();
    expect(variables).toEqual(
      expect.arrayContaining([
        { key: '--main-color', value: '#fff' },
        { key: '--secondary-color', value: '#000' },
      ])
    );
  });
});
