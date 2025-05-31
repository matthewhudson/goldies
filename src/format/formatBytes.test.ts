import { formatBytes } from './formatBytes'

describe('formatBytes', () => {
  test('formats 0 bytes correctly', () => {
    expect(formatBytes(0)).toBe('n/a')
  })

  test('formats bytes correctly', () => {
    expect(formatBytes(500)).toBe('500 Bytes')
  })

  test('formats kilobytes correctly', () => {
    expect(formatBytes(1024)).toBe('1.0 KB')
  })

  test('formats megabytes correctly', () => {
    expect(formatBytes(1048576)).toBe('1.0 MB')
  })

  test('formats gigabytes correctly', () => {
    expect(formatBytes(1073741824)).toBe('1.0 GB')
  })

  test('formats terabytes correctly', () => {
    expect(formatBytes(1099511627776)).toBe('1.0 TB')
  })

  test('formats values with custom separator correctly', () => {
    expect(formatBytes(1048576, '-')).toBe('1.0-MB')
  })
})
