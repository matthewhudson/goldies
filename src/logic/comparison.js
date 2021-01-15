// https://github.com/peeke/functional-filtering/blob/master/js/filtering.js
// Comparison functions by key, to allow setting via data attribute
export const comparisons = {
  eq: (a, b) => String(a) === b,
  gt: (a, b) => a > Number(b),
  gte: (a, b) => a >= Number(b),
  lt: (a, b) => a < Number(b),
  lte: (a, b) => a <= Number(b)
}
