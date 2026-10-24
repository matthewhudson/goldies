---
"goldies": minor
---

Subpath imports now also work with `require()`, for example `const { dedupe } = require('goldies/array/dedupe')`. The package is now built with tsdown. Import paths are unchanged, but files moved inside `dist/`, so direct imports of `goldies/dist/...` files (which the `exports` map already blocked in Node.js and modern bundlers) no longer resolve.
