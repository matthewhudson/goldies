import { base64ToBlob } from './base64ToBlob'

describe('base64ToBlob', () => {
  test('converts a Base64 encoded string to a Blob object', () => {
    const b64Data = 'data:image/png;base64,iVBORw0KG...'
    const contentType = 'image/png'
    const result = base64ToBlob(b64Data, contentType)

    expect(result).toBeInstanceOf(Blob)
    expect(result.type).toBe(contentType)
  })

  test('uses default contentType and sliceSize', () => {
    const b64Data = 'data:image/png;base64,iVBORw0KG...'
    const result = base64ToBlob(b64Data)

    expect(result).toBeInstanceOf(Blob)
    expect(result.type).toBe('')
  })

  test('handles empty input', () => {
    const result = base64ToBlob('')

    expect(result).toBeInstanceOf(Blob)
    expect(result.size).toBe(0)
    expect(result.type).toBe('')
  })

  test('handles invalid Base64 input', () => {
    const invalidB64Data = 'invalid base64 data';
    const result = base64ToBlob(invalidB64Data);

    expect(result).toBeInstanceOf(Blob);
    expect(result.size).toBeGreaterThan(0);
  });

  test('handles non-Base64 characters', () => {
    const nonB64Data = '!@#$%^&*()';
    const result = base64ToBlob(nonB64Data);

    expect(result).toBeInstanceOf(Blob);
    expect(result.size).toBeGreaterThan(0);
  });

  test('handles custom sliceSize', () => {
    const b64Data = 'data:image/png;base64,iVBORw0KG...';
    const result = base64ToBlob(b64Data, 'image/png', 1024);

    expect(result).toBeInstanceOf(Blob);
    expect(result.type).toBe('image/png');
  });
})
