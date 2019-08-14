// Insensitive endsWith
export function endsWith (str, ends) {
  return (
    str.toLowerCase().lastIndexOf(ends.toLowerCase()) ===
    str.length - ends.length
  )
}
