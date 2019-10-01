// Insensitive endsWith
export const endsWith = (str, ends) => {
  return (
    str.toLowerCase().lastIndexOf(ends.toLowerCase()) ===
    str.length - ends.length
  )
}
