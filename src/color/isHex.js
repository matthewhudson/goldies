// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour
export const isValidHexSimpleColor = s => {
  return /^#[a-fA-F\d]{6}$/.test(s)
}
