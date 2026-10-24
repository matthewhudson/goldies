/**
 * Return all custom properties (CSS variables) declared on `:root` in the document's stylesheets.
 * Stylesheets whose rules can't be read, such as cross-origin ones, are skipped.
 *
 * @example
 * const allCustomCSSVariables = getCustomCSSVariables()
 * // [{ key: '--main-color', value: '#fff' }, ...]
 *
 * @returns {Array<{key: string, value: string}>} Array of CSS variable objects with key and value properties
 */
export function getCustomCSSVariables(): Array<{ key: string; value: string }> {
  const variables: Array<{ key: string; value: string }> = [];

  for (const styleSheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = styleSheet.cssRules;
    } catch {
      // Reading the rules of a cross-origin stylesheet throws a SecurityError
      continue;
    }

    for (const rule of Array.from(rules)) {
      const { selectorText, style } = rule as CSSStyleRule;
      if (selectorText !== ':root') continue;

      // Read declarations through the CSSOM so values containing ":" or ";" stay intact
      for (let i = 0; i < style.length; i++) {
        const key = style[i];
        if (key.startsWith('--')) {
          variables.push({ key, value: style.getPropertyValue(key).trim() });
        }
      }
    }
  }

  return variables;
}
