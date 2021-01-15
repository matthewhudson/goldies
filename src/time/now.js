/**
 * A requirable version of Date.now()

Use-case is to be able to mock out Date.now() using require interception.

## Example

```js
var now = require("date-now")

var ts = now()
var ts2 = Date.now()
assert.equal(ts, ts2)
```
 *
 * @export
 * @returns
 */
export default function now () {
  return new Date().getTime()
}
