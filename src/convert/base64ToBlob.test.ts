import { base64ToBlob } from './base64ToBlob';

// jsdom's Blob has no arrayBuffer(), so read it back with FileReader
const readBytes = (blob: Blob): Promise<number[]> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (): void => resolve(Array.from(new Uint8Array(reader.result as ArrayBuffer)));
    reader.onerror = (): void => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });

const allBytes = Array.from({ length: 256 }, (_, i) => i);
const allBytesBase64 = btoa(String.fromCharCode(...allBytes));

describe('base64ToBlob', () => {
  test('decodes Base64 into the original bytes', async () => {
    const result = base64ToBlob(btoa('hello'), 'text/plain');

    expect(result).toBeInstanceOf(Blob);
    expect(result.type).toBe('text/plain');
    expect(await readBytes(result)).toEqual([104, 101, 108, 108, 111]);
  });

  test('decodes binary data byte-for-byte', async () => {
    expect(await readBytes(base64ToBlob(allBytesBase64))).toEqual(allBytes);
  });

  test('uses default contentType and sliceSize', () => {
    const result = base64ToBlob(allBytesBase64);

    expect(result.type).toBe('');
    expect(result.size).toBe(256);
  });

  test('handles empty input', () => {
    const result = base64ToBlob('');

    expect(result).toBeInstanceOf(Blob);
    expect(result.size).toBe(0);
    expect(result.type).toBe('');
  });

  test('throws on invalid Base64 input', () => {
    expect(() => base64ToBlob('!@#$%^&*()')).toThrow();
    expect(() => base64ToBlob('data:image/png;base64,iVBORw0KGgo=')).toThrow();
  });

  test('handles custom sliceSize', async () => {
    const result = base64ToBlob(allBytesBase64, 'application/octet-stream', 7);

    expect(result.type).toBe('application/octet-stream');
    expect(await readBytes(result)).toEqual(allBytes);
  });
});
