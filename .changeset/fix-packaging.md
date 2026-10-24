---
"goldies": patch
---

Fix packaging so every documented entry point works

- `require('goldies')` works again. The CommonJS bundle is now `dist/cjs/goldies.cjs`; as a `.js` file inside a `"type": "module"` package, Node loaded it as ESM and threw `require is not defined`.
- CommonJS TypeScript consumers (`node16`/`nodenext`) get `export =` types that match `module.exports`.
- Root declarations use `.js` import extensions, so `node16`/`nodenext` consumers get real types instead of `any`.
- Replace the broken `goldies/color/getContrast` and `goldies/color/isValidHexSimpleColor` subpaths, which pointed at files that don't exist, with `goldies/color/getContrastColor` and `goldies/color/isValidHexColor`.
- `dist/browser/goldies.min.js` is minified again (28 KB → 5 KB).
- Stop publishing `*.test.d.ts` declaration files.
