// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour
export function isValidSimpleColor (s) {
  return /^#[a-fA-F\d]{6}$/.test(s)
}
