---
"goldies": patch
---

Enable previously skipped tests and improve test coverage

- Enable 45 skipped tests in DOM and Node modules (all now passing)
- Add missing tests for isUrl utility function (14 new tests)
- Fix isUrl implementation to always return boolean instead of truthy/falsy values
- Improve JSDOM setup to properly support all HTML element types
- Remove unmockable edge case test in port utility
- All 276 tests now passing with excellent coverage across the library
