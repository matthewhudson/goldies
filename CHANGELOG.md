# goldies

## 5.0.2

### Patch Changes

- df3dc9e: When `domify` wraps a non-`Error` value thrown during parsing, the original value is now available as the error's `cause`.
- 856baef: Remove the unused `kleur` dependency. Nothing in goldies imported it, but every install pulled it in. goldies now has no runtime dependencies.

## 5.0.1

### Patch Changes

- c0d7f11: Enable previously skipped tests and improve test coverage
  - Enable 45 skipped tests in DOM and Node modules (all now passing)
  - Add missing tests for isUrl utility function (14 new tests)
  - Fix isUrl implementation to always return boolean instead of truthy/falsy values
  - Improve JSDOM setup to properly support all HTML element types
  - Remove unmockable edge case test in port utility
  - All 276 tests now passing with excellent coverage across the library

- 0150459: Fix packaging so every documented entry point works
  - `require('goldies')` works again. The CommonJS bundle is now `dist/cjs/goldies.cjs`; as a `.js` file inside a `"type": "module"` package, Node loaded it as ESM and threw `require is not defined`.
  - CommonJS TypeScript consumers (`node16`/`nodenext`) get `export =` types that match `module.exports`.
  - Root declarations use `.js` import extensions, so `node16`/`nodenext` consumers get real types instead of `any`.
  - Replace the broken `goldies/color/getContrast` and `goldies/color/isValidHexSimpleColor` subpaths, which pointed at files that don't exist, with `goldies/color/getContrastColor` and `goldies/color/isValidHexColor`.
  - `dist/browser/goldies.min.js` is minified again (28 KB → 5 KB).
  - Stop publishing `*.test.d.ts` declaration files.

- 9f40510: Fix incorrect results in several utilities
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

## 5.0.0

### Major Changes

- de6dfc0: # Goldies v5.0.0

  ## Modern Library Infrastructure and TypeScript Improvements
  - Added modern tree-shakable exports enabling direct imports of individual functions
  - Fixed TypeScript declaration generation and path mapping
  - Updated build system to maintain backward compatibility
  - Switched from semantic-release to Changesets for better release management
  - Added comprehensive developer documentation with import examples and bundle size comparisons
  - Added conventional commit enforcement with commitlint
  - Upgraded to ESLint v9 with modern flat configuration
  - Improved TypeScript type safety and reduced use of `any` types
  - Added proper return types to all utility functions
