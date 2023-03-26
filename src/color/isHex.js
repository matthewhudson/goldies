// https://html.spec.whatwg.org/multipage/infrastructure.html#valid-simple-colour
export function isValidHexSimpleColor(hexString) {
  return /^#[a-fA-F\d]{6}$/.test(hexString);
}
