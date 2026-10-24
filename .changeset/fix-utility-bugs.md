---
"goldies": patch
---

Fix incorrect results in several utilities

- `base64ToBlob` now decodes its input. It used to store the Base64 text itself, and it now throws on invalid Base64.
- `toBase64`, `fromBase64` and `parseJSONFromBytes` work in browsers. They relied on Node's `Buffer`, so the browser bundle returned `''` or threw. `fromBase64` now also returns `''` for malformed input (characters outside the Base64 alphabet, data after the padding) instead of partially decoding it. `parseJSONFromBytes` is typed as taking a `Uint8Array`, which includes `Buffer`.
- `dedupe` keeps one `NaN` instead of dropping every `NaN`, and no longer takes quadratic time.
- `endsWith('a', 'ab')` and `endsWith('', 'x')` return `false`.
- `getURLParams` decodes values once, so `?q=100%25` gives `100%` instead of throwing, and `%2520` gives `%20`.
- `formatBytes` handles PB through YB, negative values and fractions, and returns `n/a` for `NaN` and `Infinity`.
- `getFileType` matches whole extensions (`'camera'` was `audio`), accepts file names and paths, and recognizes formats such as `pdf`, `doc`, `mov` and `heic`.
- `clone` copies `Date`, `Map` and `Set` values instead of turning them into empty objects.
- `isUrl` works without a DOM (it threw in Node.js) and keeps its browser behavior.
- `getCustomCSSVariables` keeps values containing `:` or `;` (such as `url(...)` and data URIs), returns only custom properties, and skips cross-origin stylesheets instead of throwing.
