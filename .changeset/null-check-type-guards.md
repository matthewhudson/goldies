---
'goldies': minor
---

`isNull`, `isUndefined` and `isNil` are now type guards, so TypeScript narrows the value you check: after `if (!isNil(value))`, `value` is no longer `null | undefined`.
