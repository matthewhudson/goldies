import { isExternalUrl } from './isExternalUrl';

describe('isExternalUrl', () => {
  // Note: window.location.host is 'localhost' (jsdom url in vitest.config.ts)
  // isExternalUrl checks whether a string is a URL on a different host than the current page

  test('returns true for external URLs with protocol', () => {
    expect(isExternalUrl('https://example.com')).toBe(true);
    expect(isExternalUrl('http://google.com')).toBe(true);
    expect(isExternalUrl('https://www.github.com/user/repo')).toBe(true);
  });

  test('returns false for URLs without protocol (treated as relative paths)', () => {
    // Without protocol, browser treats these as relative paths
    expect(isExternalUrl('example.com')).toBe(false);
    expect(isExternalUrl('www.google.com')).toBe(false);
    expect(isExternalUrl('github.com/user')).toBe(false);
  });

  test('returns false for relative URLs', () => {
    expect(isExternalUrl('/path/to/page')).toBe(false);
    expect(isExternalUrl('/about')).toBe(false);
    expect(isExternalUrl('./relative/path')).toBe(false);
    expect(isExternalUrl('../parent/path')).toBe(false);
  });

  test('returns false for same-host URLs (localhost)', () => {
    expect(isExternalUrl('http://localhost')).toBe(false);
    expect(isExternalUrl('http://localhost/path')).toBe(false);
  });

  test('returns true for localhost with different port', () => {
    // Different port means different host
    expect(isExternalUrl('http://localhost:3000')).toBe(true);
  });

  test('returns false for anchor links', () => {
    expect(isExternalUrl('#section')).toBe(false);
    expect(isExternalUrl('#top')).toBe(false);
  });

  test('returns false for empty or invalid strings', () => {
    expect(isExternalUrl('')).toBe(false);
    expect(isExternalUrl(' ')).toBe(false);
  });

  test('handles FTP URLs correctly', () => {
    expect(isExternalUrl('ftp://example.com')).toBe(true);
  });

  test('returns false for special protocol URLs without traditional host', () => {
    // mailto: and tel: don't have a traditional host, so a.host is empty
    expect(isExternalUrl('mailto:test@example.com')).toBe(false);
    expect(isExternalUrl('tel:+1234567890')).toBe(false);
  });

  test('handles URLs with query parameters', () => {
    expect(isExternalUrl('https://example.com?param=value')).toBe(true);
    // Without protocol, treated as relative path
    expect(isExternalUrl('example.com?search=test&page=1')).toBe(false);
  });

  test('handles URLs with ports', () => {
    expect(isExternalUrl('https://example.com:8080')).toBe(true);
    expect(isExternalUrl('http://api.example.com:3000/endpoint')).toBe(true);
  });

  test('handles URLs with subdomains', () => {
    expect(isExternalUrl('https://api.example.com')).toBe(true);
    expect(isExternalUrl('http://subdomain.domain.example.com')).toBe(true);
  });

  test('handles URLs with authentication', () => {
    expect(isExternalUrl('https://user:pass@example.com')).toBe(true);
  });

  test('handles URLs with hash fragments', () => {
    expect(isExternalUrl('https://example.com#section')).toBe(true);
    expect(isExternalUrl('https://example.com/page#anchor')).toBe(true);
  });

  test('works without a DOM (Node.js)', () => {
    vi.stubGlobal('window', undefined);
    vi.stubGlobal('document', undefined);
    try {
      expect(isExternalUrl('https://example.com')).toBe(true);
      expect(isExternalUrl('/about')).toBe(false);
      expect(isExternalUrl('mailto:test@example.com')).toBe(false);
      expect(isExternalUrl('')).toBe(false);
    } finally {
      vi.unstubAllGlobals();
    }
  });
});
