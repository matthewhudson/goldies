import { isUrl } from './isUrl';

describe('isUrl', () => {
  // Note: window.location.host is set to 'localhost' in vitest.setup.ts
  // The isUrl function checks if a string is an external URL (different host than current)
  // by creating an anchor element and checking its host property

  test('returns true for external URLs with protocol', () => {
    expect(isUrl('https://example.com')).toBe(true);
    expect(isUrl('http://google.com')).toBe(true);
    expect(isUrl('https://www.github.com/user/repo')).toBe(true);
  });

  test('returns false for URLs without protocol (treated as relative paths)', () => {
    // Without protocol, browser treats these as relative paths
    expect(isUrl('example.com')).toBe(false);
    expect(isUrl('www.google.com')).toBe(false);
    expect(isUrl('github.com/user')).toBe(false);
  });

  test('returns false for relative URLs', () => {
    expect(isUrl('/path/to/page')).toBe(false);
    expect(isUrl('/about')).toBe(false);
    expect(isUrl('./relative/path')).toBe(false);
    expect(isUrl('../parent/path')).toBe(false);
  });

  test('returns false for same-host URLs (localhost)', () => {
    expect(isUrl('http://localhost')).toBe(false);
    expect(isUrl('http://localhost/path')).toBe(false);
  });

  test('returns true for localhost with different port', () => {
    // Different port means different host
    expect(isUrl('http://localhost:3000')).toBe(true);
  });

  test('returns false for anchor links', () => {
    expect(isUrl('#section')).toBe(false);
    expect(isUrl('#top')).toBe(false);
  });

  test('returns false for empty or invalid strings', () => {
    expect(isUrl('')).toBe(false);
    expect(isUrl(' ')).toBe(false);
  });

  test('handles FTP URLs correctly', () => {
    expect(isUrl('ftp://example.com')).toBe(true);
  });

  test('returns false for special protocol URLs without traditional host', () => {
    // mailto: and tel: don't have a traditional host, so a.host is empty
    expect(isUrl('mailto:test@example.com')).toBe(false);
    expect(isUrl('tel:+1234567890')).toBe(false);
  });

  test('handles URLs with query parameters', () => {
    expect(isUrl('https://example.com?param=value')).toBe(true);
    // Without protocol, treated as relative path
    expect(isUrl('example.com?search=test&page=1')).toBe(false);
  });

  test('handles URLs with ports', () => {
    expect(isUrl('https://example.com:8080')).toBe(true);
    expect(isUrl('http://api.example.com:3000/endpoint')).toBe(true);
  });

  test('handles URLs with subdomains', () => {
    expect(isUrl('https://api.example.com')).toBe(true);
    expect(isUrl('http://subdomain.domain.example.com')).toBe(true);
  });

  test('handles URLs with authentication', () => {
    expect(isUrl('https://user:pass@example.com')).toBe(true);
  });

  test('handles URLs with hash fragments', () => {
    expect(isUrl('https://example.com#section')).toBe(true);
    expect(isUrl('https://example.com/page#anchor')).toBe(true);
  });
});
