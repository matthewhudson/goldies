# Goldies - "Good Oldies"

> My grab bag of helpful JavaScript & tidbits.

## Installation

```sh
npm i goldies
```

And then import it:

```js
// using es modules
import goldies from 'goldies'

// common.js
const device = require('goldies').default
```

Or use script tags and globals.

```html
<script src="https://unpkg.com/goldies@4.0.0/umd/goldies.min.js"></script>
```

And then access it off the global like so:

```js
console.log('goldies.utils.isBrowser() === %s', goldies.utils.isBrowser())
```

## Background

The code and other tools here serve as my own personal reference points. In some
cases, they're URL tools, or DOM helpers. But more often than not, they're tiny
chunks of code I've forgotten and had to lookup on Google or StackOverflow.

Plan is to keep them here and add tests/benchmark/notes when appropriate.

## Additional Resources

These are development tools and services I've found useful previously, and don't
want to forget about.

## Reading

- [Zero Bundler Docs](https://github.com/remoteinterview/zero)
- [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)

## NPM Packages

###### [30 Seconds of Code](https://github.com/30-seconds/30-seconds-of-code#is)

A curated collection of useful JavaScript snippets that you can understand in 30
seconds or less.

###### [Redux w/o React](https://github.com/morkro/tetrys)

For smaller projects

###### [Fetch Wrapper](https://github.com/codex-team/ajax)

Small, solid fetch api wrapper.
