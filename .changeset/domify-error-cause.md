---
"goldies": patch
---

When `domify` wraps a non-`Error` value thrown during parsing, the original value is now available as the error's `cause`.
