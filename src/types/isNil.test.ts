import { isNil } from './isNil'

describe('isNil', () => {
  it('should return true if value is null', () => {
    expect(isNil(null)).toBe(true);
  });

  it('should return true if value is undefined', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('should return false if value is not null or undefined', () => {
    expect(isNil('')).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
  });

  it('should return true for missing input', () => {
    expect(isNil()).toBe(true);
  });

  it('should return false for NaN', () => {
    expect(isNil(NaN)).toBe(false)
  })

  it('should return false for empty strings', () => {
    expect(isNil('')).toBe(false);
  });

  it('should return false for whitespace strings', () => {
    expect(isNil('   ')).toBe(false);
  });
})
