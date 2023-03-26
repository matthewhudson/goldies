import { isValidHexSimpleColor } from './isValidHexSimpleColor'

test('returns false for #000', () => {
  expect(isValidHexSimpleColor('#000')).toBeFalsy()
})

test('returns false for #FFF', () => {
  expect(isValidHexSimpleColor('#FFF')).toBeFalsy()
})

test('returns true for #FFFFFF', () => {
  expect(isValidHexSimpleColor('#FFFFFF')).toBeTruthy()
})
