/*: warning: Throw a given error.

```js

bail()

bail(new Error('failure'))
// Error: failure
//     at repl:1:6
//     at REPLServer.defaultEval (repl.js:154:27)
//     ...
```

## API

### `bail([err])`

Throw a given error.

###### Parameters

*   `err` (`Error?`) — Optional error.

###### Throws

*   `Error` — Given error, if any.

  */
export default function bail (err) {
  if (err) {
    throw err
  }
}
