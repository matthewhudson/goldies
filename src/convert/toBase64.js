export default function toBase64 (str) {
  return new Buffer(str || '', 'ascii').toString('base64')
}
