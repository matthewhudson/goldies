---
'goldies': minor
---

New utilities:

- `chunk` (`goldies/array/chunk`) splits an array into chunks of a given size.
- `omit` (`goldies/object/omit`) copies an object without the given properties, the opposite of `pick`.
- `debounce` (`goldies/utils/debounce`) calls a function once calls stop for a while, and `throttle` (`goldies/utils/throttle`) calls it at most once per interval. Both keep `this` and the argument types, take `leading` and `trailing` options, and have `cancel()` and `flush()` methods.
- `retry` (`goldies/utils/retry`) calls a function until it succeeds, with exponential backoff. Its options set the number of attempts, the delay and its growth, an `AbortSignal` to stop it, and a `shouldRetry` check to give up early on errors that won't go away.

`pick` and `filter` now accept objects whose type is an `interface`. Before, TypeScript rejected them because interfaces have no index signature.
