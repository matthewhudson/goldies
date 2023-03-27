import { TextEncoder } from 'util'
import { parseJSONFromBytes } from './json'

describe('parseJSONFromBytes', () => {
  test('parses a JSON object from a Buffer', () => {
    const jsonString = '{"key": "value"}'
    const buffer = Buffer.from(jsonString, 'utf-8')
    const expected = { key: 'value' }
    const result = parseJSONFromBytes(buffer)

    expect(result).toEqual(expected)
  })

  // test('parses a JSON object from a Uint8Array', () => {
  //   const jsonString = '{"key": "value"}'
  //   const uint8Array = new TextEncoder().encode(jsonString)
  //   const expected = { key: 'value' }
  //   const result = parseJSONFromBytes(uint8Array)

  //   expect(result).toEqual(expected)
  // })
})
