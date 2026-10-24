import { formatBytes } from './formatBytes';

describe('formatBytes', () => {
  test('formats 0 bytes correctly', () => {
    expect(formatBytes(0)).toBe('n/a');
  });

  test('formats bytes correctly', () => {
    expect(formatBytes(500)).toBe('500 Bytes');
  });

  test('formats kilobytes correctly', () => {
    expect(formatBytes(1024)).toBe('1.0 KB');
  });

  test('formats megabytes correctly', () => {
    expect(formatBytes(1048576)).toBe('1.0 MB');
  });

  test('formats gigabytes correctly', () => {
    expect(formatBytes(1073741824)).toBe('1.0 GB');
  });

  test('formats terabytes correctly', () => {
    expect(formatBytes(1099511627776)).toBe('1.0 TB');
  });

  test('formats petabytes and larger', () => {
    expect(formatBytes(1024 ** 5)).toBe('1.0 PB');
    expect(formatBytes(1024 ** 8)).toBe('1.0 YB');
  });

  test('stays in YB beyond the largest unit', () => {
    expect(formatBytes(1024 ** 9)).toBe('1024.0 YB');
  });

  test('formats negative values', () => {
    expect(formatBytes(-500)).toBe('-500 Bytes');
    expect(formatBytes(-2048)).toBe('-2.0 KB');
  });

  test('formats fractional bytes', () => {
    expect(formatBytes(0.5)).toBe('0.5 Bytes');
  });

  test('returns n/a for non-finite values', () => {
    expect(formatBytes(NaN)).toBe('n/a');
    expect(formatBytes(Infinity)).toBe('n/a');
  });

  test('formats values with custom separator correctly', () => {
    expect(formatBytes(1048576, '-')).toBe('1.0-MB');
  });
});
