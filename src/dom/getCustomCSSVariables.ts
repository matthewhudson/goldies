/**
 * Return all custom variables from the document.
 * Derived from: stackoverflow.com/questions/45763121/list-css-custom-properties-css-variables
 *
 * @example
 * const allCustomCSSVariables = getCustomCSSVariables('<p>example</p>')
 *
 * @returns {Array<{key: string, value: string}>} Array of CSS variable objects with key and value properties
 */
export function getCustomCSSVariables(): Array<{key: string, value: string}> {
  const variables = [].slice
    .call(document.styleSheets)
    .map(styleSheet => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter(cssRule => cssRule.selectorText === ":root")
    .map(cssRule =>
      cssRule.cssText
        .split("{")[1]
        .split("}")[0]
        .trim()
        .split(";")
    )
    .flat()
    .filter(text => text !== "")
    .map(text => text.split(":"))
    .map(parts => ({ key: parts[0].trim(), value: parts[1].trim() }));

  return variables;
}
