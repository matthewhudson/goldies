import { isValidHexColor } from './isValidHexColor';

describe('isValidHexColor', () => {
  test('returns false for #000', () => {
    expect(isValidHexColor('#000')).toBeFalsy();
  });

  test('returns false for #FFF', () => {
    expect(isValidHexColor('#FFF')).toBeFalsy();
  });

  test('returns true for #FFFFFF', () => {
    expect(isValidHexColor('#FFFFFF')).toBeTruthy();
  });

  test('returns false for invalid hex strings', () => {
    expect(isValidHexColor('#xyz123')).toBeFalsy();
    expect(isValidHexColor('#12345')).toBeFalsy();
  });

  test('returns false for non-hex characters', () => {
    expect(isValidHexColor('#GGGGGG')).toBeFalsy();
  });

  test('returns false for missing # prefix', () => {
    expect(isValidHexColor('FFFFFF')).toBeFalsy();
  });
});
