import { getCustomCSSVariables } from './getCustomCSSVariables';

const addStyle = (css: string): HTMLStyleElement => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
  return style;
};

describe('getCustomCSSVariables', () => {
  beforeAll(() => {
    addStyle(':root { --main-color: #fff; --secondary-color: #000; }');
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

  test('keeps colons and semicolons inside values', () => {
    const style = addStyle(
      ':root { --bg: url(http://example.com/a.png); --icon: url("data:image/svg+xml;base64,PHN2Zz4="); }'
    );
    try {
      expect(getCustomCSSVariables()).toEqual(
        expect.arrayContaining([
          { key: '--bg', value: 'url(http://example.com/a.png)' },
          { key: '--icon', value: 'url("data:image/svg+xml;base64,PHN2Zz4=")' },
        ])
      );
    } finally {
      style.remove();
    }
  });

  test('ignores standard properties in :root', () => {
    const style = addStyle(':root { color: red; --accent: blue; }');
    try {
      const keys = getCustomCSSVariables().map(({ key }) => key);
      expect(keys).toContain('--accent');
      expect(keys).not.toContain('color');
    } finally {
      style.remove();
    }
  });

  test('skips stylesheets whose rules cannot be read (cross-origin)', () => {
    const crossOrigin = {
      get cssRules(): CSSRuleList {
        throw new DOMException('Cannot access rules', 'SecurityError');
      },
    };
    const sheets = [crossOrigin, ...Array.from(document.styleSheets)];
    Object.defineProperty(document, 'styleSheets', { configurable: true, get: () => sheets });
    try {
      expect(getCustomCSSVariables()).toEqual(
        expect.arrayContaining([{ key: '--main-color', value: '#fff' }])
      );
    } finally {
      delete (document as { styleSheets?: StyleSheetList }).styleSheets;
    }
  });
});
