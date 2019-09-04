export function error ({ msg }) {
  return new Error(msg)
}

// catastrophic error
export function cerror (err) {
  throw err
}
