import { isUndefined } from './isUndefined'

describe('isUndefined', () => {
  it('should return true if value is undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it('should return false if value is not undefined', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined('')).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({})).toBe(false);
  });

  it('should return true for missing input', () => {
    expect(isUndefined()).toBe(true);
  });
})
