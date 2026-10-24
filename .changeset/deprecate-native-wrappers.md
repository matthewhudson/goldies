---
'goldies': minor
---

Deprecate the utilities that JavaScript or Node.js now provides, ahead of their removal in 6.0. They still work, and editors show them crossed out with the replacement. The README lists them all: `startsWith`, `endsWith`, `has`, `clone`, `addClass`, `hasClass`, `removeClass`, `toggleClass`, `getDataAttributes`, `fromArray`, `readFile`, `getURLParams`, `buildQuery` and `getDirectoryTree`.

`isUrl` is renamed to `isExternalUrl` (`goldies/types/isExternalUrl`), which says what it checks: whether a string is a URL on a different host than the current page. `isUrl` remains as a deprecated alias.
