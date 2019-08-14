// stackoverflow.com/questions/45763121/list-css-custom-properties-css-variables
export const getAllStylesheetCustomVariables = () => {
  const variables = [].slice
    .call(document.styleSheets)
    .map(styleSheet => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter(cssRule => cssRule.selectorText === ':root')
    .map(cssRule =>
      cssRule.cssText
        .split('{')[1]
        .split('}')[0]
        .trim()
        .split(';')
    )
    .flat()
    .filter(text => text !== '')
    .map(text => text.split(':'))
    .map(parts => ({ key: parts[0].trim(), value: parts[1].trim() }))

  return variables
}
