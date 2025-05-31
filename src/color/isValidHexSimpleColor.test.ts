import { isValidHexSimpleColor } from './isValidHexSimpleColor';

describe('isValidHexSimpleColor', () => {
  test('returns false for #000', () => {
    expect(isValidHexSimpleColor('#000')).toBeFalsy();
  });

  test('returns false for #FFF', () => {
    expect(isValidHexSimpleColor('#FFF')).toBeFalsy();
  });

  test('returns true for #FFFFFF', () => {
    expect(isValidHexSimpleColor('#FFFFFF')).toBeTruthy();
  });

  test('returns false for invalid hex strings', () => {
    expect(isValidHexSimpleColor('#xyz123')).toBeFalsy();
    expect(isValidHexSimpleColor('#12345')).toBeFalsy();
  });

  test('returns false for non-hex characters', () => {
    expect(isValidHexSimpleColor('#GGGGGG')).toBeFalsy();
  });

  test('returns false for missing # prefix', () => {
    expect(isValidHexSimpleColor('FFFFFF')).toBeFalsy();
  });
});
