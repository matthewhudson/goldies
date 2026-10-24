# Goldies

A wide-ranging collection of JavaScript helpers covering debugging, serialization, sanitization, validation, HTTP requests and more.

[![npm version](https://badge.fury.io/js/goldies.svg)](https://badge.fury.io/js/goldies)
[![npm downloads](https://img.shields.io/npm/dm/goldies.svg)](https://www.npmjs.com/package/goldies)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/goldies)](https://bundlephobia.com/package/goldies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js: v22](https://img.shields.io/badge/node-v22-green.svg)](https://nodejs.org/en/)
[![CI](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml/badge.svg)](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml)

**[API reference](https://matthewhudson.github.io/goldies/api/)** · [Live demo](https://matthewhudson.github.io/goldies/)

## Features

- 🌲 **Tree-shakable**: Import only what you need
- 🔄 **Multiple formats**: ESM, CommonJS, and UMD bundles
- 📦 **Environment-aware**: Browser and Node.js specific utilities
- 📊 **Type-safe**: Full TypeScript support with type definitions
- 🧩 **Modular**: Use individual functions or the full library

## Installation

```bash
npm install goldies
```

## Usage

Goldies supports two import styles to fit your needs:

### 1. Traditional namespace import (includes everything)

```typescript
import goldies from 'goldies';

// Array utilities
const uniqueArray = goldies.array.dedupe([1, 2, 2, 3]);

// Object utilities
const picked = goldies.object.pick({ name: 'John', age: 30 }, ['name']);

// Color utilities
const ratio = goldies.color.getContrastRatio('#777777', '#ffffff'); // 4.48
```

CommonJS works too:

```javascript
const goldies = require('goldies');
```

### 2. Tree-shakable direct imports (recommended)

```typescript
// Only import what you need for smaller bundle size
import { dedupe } from 'goldies/array/dedupe';
import { pick } from 'goldies/object/pick';
import { getContrastRatio } from 'goldies/color/getContrastRatio';

const uniqueArray = dedupe([1, 2, 2, 3]);
const picked = pick({ name: 'John', age: 30 }, ['name']);
const ratio = getContrastRatio('#777777', '#ffffff');
```

Direct imports work with `require` too: `const { dedupe } = require('goldies/array/dedupe');`

## Bundle Size Comparison

| Import Style | Bundle Size |
|--------------|-------------|
| Full library (browser) | ~8 KB minified, ~3.5 KB gzipped |
| Single function | ~0.1-0.8 KB minified |

With direct imports, your bundle only includes the functions you use.

## Available Utilities

### Array

| Function | Description | Import Path |
|----------|-------------|-------------|
| `chunk` | Split an array into chunks of a given size | `goldies/array/chunk` |
| `dedupe` | Remove duplicates from an array | `goldies/array/dedupe` |

### Color

| Function | Description | Import Path |
|----------|-------------|-------------|
| `calculateRelativeLuminance` | WCAG relative luminance of a hex color, from 0 to 1 | `goldies/color/calculateRelativeLuminance` |
| `generateRandomHexColor` | Random hex color | `goldies/color/generateRandomHexColor` |
| `generateRandomHexColorInRange` | Random hex color between two colors, channel by channel | `goldies/color/generateRandomHexColorInRange` |
| `getContrastColor` | Pick black or white text for a background color | `goldies/color/getContrastColor` |
| `getContrastRatio` | WCAG contrast ratio between two colors, from 1 to 21 | `goldies/color/getContrastRatio` |
| `hexToRgb` | Convert a 3- or 6-digit hex color to `{ r, g, b }` | `goldies/color/hexToRgb` |
| `isValidHexColor` | Validate a 6-digit hex color (`#rrggbb`) | `goldies/color/isValidHexColor` |

### Convert

| Function | Description | Import Path |
|----------|-------------|-------------|
| `base64ToBlob` | Convert base64 string to Blob | `goldies/convert/base64ToBlob` |
| `fromBase64` | Decode base64 string | `goldies/convert/fromBase64` |
| `parseJSONFromBytes` | Parse JSON from byte array | `goldies/convert/parseJSONFromBytes` |
| `toBase64` | Encode string to base64 | `goldies/convert/toBase64` |

### DOM (Browser only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `$` | Query selector (similar to jQuery) | `goldies/dom/selectors` |
| `$$` | Query selector all (similar to jQuery) | `goldies/dom/selectors` |
| `attr` | Get/set element attributes | `goldies/dom/attr` |
| `domify` | Create DOM elements from HTML string | `goldies/dom/domify` |
| `getCustomCSSVariables` | Get CSS custom properties | `goldies/dom/getCustomCSSVariables` |

### Format

| Function | Description | Import Path |
|----------|-------------|-------------|
| `formatBytes` | Format byte sizes (e.g., 1024 → "1 KB") | `goldies/format/formatBytes` |

### Object

| Function | Description | Import Path |
|----------|-------------|-------------|
| `filter` | Filter object properties | `goldies/object/filter` |
| `omit` | Copy an object without the given properties | `goldies/object/omit` |
| `pick` | Pick specific properties from object | `goldies/object/pick` |

### String

| Function | Description | Import Path |
|----------|-------------|-------------|
| `findUsernames` | Extract usernames from string | `goldies/string/findUsernames` |

### Types

| Function | Description | Import Path |
|----------|-------------|-------------|
| `isDefined` | Check if value is defined | `goldies/types/isDefined` |
| `isExternalUrl` | Check if a string is a URL on a different host than the current page | `goldies/types/isExternalUrl` |
| `isJSON` | Check if string is valid JSON | `goldies/types/isJSON` |
| `isNil` | Check if value is null or undefined | `goldies/types/isNil` |
| `isNull` | Check if value is null | `goldies/types/isNull` |
| `isUndefined` | Check if value is undefined | `goldies/types/isUndefined` |

### Utils

| Function | Description | Import Path |
|----------|-------------|-------------|
| `debounce` | Call a function once calls stop for a while | `goldies/utils/debounce` |
| `escapeHTML` | Escape HTML characters | `goldies/utils/escapeHTML` |
| `isBrowser` | Check if code runs in browser | `goldies/utils/isBrowser` |
| `isServer` | Check if code runs on server | `goldies/utils/isServer` |
| `reloadPageWhenOnline` | Auto-reload page when back online | `goldies/utils/reloadPageWhenOnline` |
| `retry` | Retry a function with exponential backoff, cancellable with an `AbortSignal` | `goldies/utils/retry` |
| `s3` | S3 URL utilities | `goldies/utils/s3` |
| `sleep` | Promise-based delay | `goldies/utils/sleep` |
| `throttle` | Call a function at most once per interval | `goldies/utils/throttle` |

### Files (Node.js only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `getFileType` | Determine file type | `goldies/files/getFileType` |
| `isDirectory` | Check if path is directory | `goldies/files/isDirectory` |

### Node (Node.js only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `port` | Find available network port | `goldies/node/port` |
| `sh` | Execute shell commands | `goldies/node/sh` |

### Deprecated (removed in 6.0)

These still work in 5.x, but JavaScript and Node.js now do the same job. Editors show them crossed out.

| Function | Use instead |
|----------|-------------|
| `addClass`, `hasClass`, `removeClass`, `toggleClass` | `element.classList.add`, `.contains`, `.remove`, `.toggle` |
| `buildQuery` | `new URLSearchParams(data).toString()` |
| `clone` | `structuredClone(obj)`, which doesn't freeze the copy |
| `endsWith` | `str.toLowerCase().endsWith(ends.toLowerCase())` |
| `fromArray` | `String(arr)` |
| `getDataAttributes` | `element.dataset` |
| `getDirectoryTree` | `readdirSync(dir, { recursive: true, withFileTypes: true })` from `node:fs` |
| `getURLParams` | `Object.fromEntries(new URL(url).searchParams)` |
| `has` | `Object.hasOwn(target, key)` |
| `isUrl` | `isExternalUrl` (same function, new name) |
| `readFile` | `readFile(path, 'utf8')` from `node:fs/promises` |
| `startsWith` | `str.toLowerCase().startsWith(prefix.toLowerCase())` |

## Library Features

- **Array Utilities**: Deduplication and chunking
- **DOM Utilities**: Element selection, attributes, HTML parsing, and CSS variables
- **Color Utilities**: Validation, conversion, WCAG contrast and random colors
- **File Utilities**: File type detection and directory checks
- **String Utilities**: Username detection
- **Type Checking**: Comprehensive type checking utilities
- **Object Utilities**: Picking, omitting, and filtering properties
- **General Utilities**: Debounce, throttle, retry with backoff, HTML escaping, S3 paths, and more

## TypeScript Support

This package is written in TypeScript and includes type definitions. You get full type safety and autocompletion when using it in TypeScript projects.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the package
npm run build

# Lint the code
npm run lint

# Format the code
npm run format
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- Matthew Hudson ([@matthewhudson](https://github.com/matthewhudson))
- Website: [hudson.dev](https://hudson.dev)
