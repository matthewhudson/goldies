import { isS3, parseS3 } from './s3'

describe('isS3', () => {
  test('returns true for a valid S3 path', () => {
    const validS3Path = 's3://bucket-name/key-name'
    const isValid = isS3(validS3Path)
    expect(isValid).toBeTruthy()
  })

  test('returns false for an invalid S3 path', () => {
    const invalidS3Path = 'https://example.com/bucket-name/key-name'
    const isValid = isS3(invalidS3Path)
    expect(isValid).toBeFalsy()
  })
})

describe('parseS3', () => {
  test('parses a valid S3 path', () => {
    const s3Path = 's3://bucket-name/key-name'
    const parsed = parseS3(s3Path)
    expect(parsed).toEqual({ Bucket: 'bucket-name', Key: 'key-name' })
  })

  test('throws an error for an invalid S3 path', () => {
    const invalidS3Path = 'https://example.com/bucket-name/key-name'
    expect(() => parseS3(invalidS3Path)).toThrow('Invalid S3 path')
  })
})
