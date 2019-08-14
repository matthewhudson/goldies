export const fromBase64 = str =>
  new Buffer(str || '', 'base64').toString('ascii')
