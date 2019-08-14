// Concats values from an array to ',' separated string
export const fromArray = val =>
  val && val instanceof Array ? val.toString() : undefined
