import { getFileType } from './getFileType';

describe('getFileType', () => {
  it('returns document for txt file', () => {
    const fileType = getFileType('txt');
    expect(fileType).toBe('document');
  });

  it('returns video for mp4 file', () => {
    const fileType = getFileType('mp4');
    expect(fileType).toBe('video');
  });

  it('returns audio for mp3 file', () => {
    const fileType = getFileType('mp3');
    expect(fileType).toBe('audio');
  });

  it('returns archive for zip file', () => {
    const fileType = getFileType('zip');
    expect(fileType).toBe('archive');
  });

  it('returns image for jpg file', () => {
    const fileType = getFileType('jpg');
    expect(fileType).toBe('image');
  });

  it('returns unknown for unsupported file extension', () => {
    const fileType = getFileType('foo');
    expect(fileType).toBe('unknown');
  });

  it('matches whole extensions, not suffixes', () => {
    expect(getFileType('camera')).toBe('unknown');
    expect(getFileType('extra')).toBe('unknown');
    expect(getFileType('report.data')).toBe('unknown');
  });

  it('accepts file names and paths', () => {
    expect(getFileType('photo.JPG')).toBe('image');
    expect(getFileType('/tmp/backup.tar.gz')).toBe('archive');
    expect(getFileType('.mp3')).toBe('audio');
  });

  it('recognizes common formats', () => {
    expect(getFileType('pdf')).toBe('document');
    expect(getFileType('doc')).toBe('document');
    expect(getFileType('mov')).toBe('video');
    expect(getFileType('heic')).toBe('image');
  });
});
