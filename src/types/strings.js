// Insensitive endsWith
export function endsWith (str, ends) {
  return (
    str.toLowerCase().lastIndexOf(ends.toLowerCase()) ===
    str.length - ends.length
  )
}

// Insensitive startWith
export function startWith (str, start) {
  return str.toLowerCase().indexOf(start.toLowerCase()) === 0
}
