export const toBase64 = str => new Buffer(str || '', 'ascii').toString('base64')
