// https://infra.spec.whatwg.org/#parse-json-from-bytes
export const parseJSONFromBytes = bytes => {
  const jsonText = bytes.toString('utf-8')

  return JSON.parse(jsonText)
}
