# Goldies

A wide-ranging collection of JavaScript helpers covering debugging, serialization, sanitization, validation, HTTP requests and more.

[![npm version](https://badge.fury.io/js/goldies.svg)](https://badge.fury.io/js/goldies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml/badge.svg)](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml)

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
const cloned = goldies.object.clone({ name: 'John' });

// String utilities
const hasPrefix = goldies.string.startsWith('Hello world', 'Hello');
```

### 2. Tree-shakable direct imports (recommended)

```typescript
// Only import what you need for smaller bundle size
import { dedupe } from 'goldies/array/dedupe';
import { clone } from 'goldies/object/clone';
import { startsWith } from 'goldies/string/startsWith';

const uniqueArray = dedupe([1, 2, 2, 3]);
const cloned = clone({ name: 'John' });
const hasPrefix = startsWith('Hello world', 'Hello');
```

## Bundle Size Comparison

| Import Style | Bundle Size |
|--------------|-------------|
| Full library | ~28 KB (minified) |
| Single function | ~0.3-1 KB (minified) |

Using direct imports can reduce your bundle size by up to 99% if you only need a few functions!

## Available Utilities

### Array

| Function | Description | Import Path |
|----------|-------------|-------------|
| `dedupe` | Remove duplicates from an array | `goldies/array/dedupe` |

### Color

| Function | Description | Import Path |
|----------|-------------|-------------|
| `getContrast` | Calculate contrast ratio between colors | `goldies/color/getContrast` |
| `isValidHexSimpleColor` | Validate a hex color code | `goldies/color/isValidHexSimpleColor` |

### Convert

| Function | Description | Import Path |
|----------|-------------|-------------|
| `base64ToBlob` | Convert base64 string to Blob | `goldies/convert/base64ToBlob` |
| `fromArray` | Convert array to other formats | `goldies/convert/fromArray` |
| `fromBase64` | Decode base64 string | `goldies/convert/fromBase64` |
| `parseJSONFromBytes` | Parse JSON from byte array | `goldies/convert/parseJSONFromBytes` |
| `toBase64` | Encode string to base64 | `goldies/convert/toBase64` |

### DOM (Browser only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `$` | Query selector (similar to jQuery) | `goldies/dom/selectors` |
| `$$` | Query selector all (similar to jQuery) | `goldies/dom/selectors` |
| `attr` | Get/set element attributes | `goldies/dom/attr` |
| `addClass`, `removeClass`, `toggleClass` | Manipulate element classes | `goldies/dom/classes` |
| `domify` | Create DOM elements from HTML string | `goldies/dom/domify` |
| `getCustomCSSVariables` | Get CSS custom properties | `goldies/dom/getCustomCSSVariables` |
| `getDataAttributes` | Get data attributes from element | `goldies/dom/getDataAttributes` |

### Format

| Function | Description | Import Path |
|----------|-------------|-------------|
| `formatBytes` | Format byte sizes (e.g., 1024 → "1 KB") | `goldies/format/formatBytes` |

### Object

| Function | Description | Import Path |
|----------|-------------|-------------|
| `clone` | Deep clone an object | `goldies/object/clone` |
| `filter` | Filter object properties | `goldies/object/filter` |
| `has` | Check if object has property | `goldies/object/has` |
| `pick` | Pick specific properties from object | `goldies/object/pick` |

### String

| Function | Description | Import Path |
|----------|-------------|-------------|
| `endsWith` | Check if string ends with substring | `goldies/string/endsWith` |
| `findUsernames` | Extract usernames from string | `goldies/string/findUsernames` |
| `startsWith` | Check if string starts with substring | `goldies/string/startsWith` |

### Types

| Function | Description | Import Path |
|----------|-------------|-------------|
| `isDefined` | Check if value is defined | `goldies/types/isDefined` |
| `isJSON` | Check if string is valid JSON | `goldies/types/isJSON` |
| `isNil` | Check if value is null or undefined | `goldies/types/isNil` |
| `isNull` | Check if value is null | `goldies/types/isNull` |
| `isUndefined` | Check if value is undefined | `goldies/types/isUndefined` |
| `isUrl` | Check if string is valid URL | `goldies/types/isUrl` |

### Utils

| Function | Description | Import Path |
|----------|-------------|-------------|
| `buildQuery` | Build URL query string | `goldies/utils/buildQuery` |
| `escapeHTML` | Escape HTML characters | `goldies/utils/escapeHTML` |
| `getURLParams` | Parse URL parameters | `goldies/utils/getURLParams` |
| `isBrowser` | Check if code runs in browser | `goldies/utils/isBrowser` |
| `isServer` | Check if code runs on server | `goldies/utils/isServer` |
| `reloadPageWhenOnline` | Auto-reload page when back online | `goldies/utils/reloadPageWhenOnline` |
| `s3` | S3 URL utilities | `goldies/utils/s3` |
| `sleep` | Promise-based delay | `goldies/utils/sleep` |

### Files (Node.js only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `getDirectoryTree` | Generate directory structure | `goldies/files/getDirectoryTree` |
| `getFileType` | Determine file type | `goldies/files/getFileType` |
| `isDirectory` | Check if path is directory | `goldies/files/isDirectory` |
| `readFile` | Read file contents | `goldies/files/readFile` |

### Node (Node.js only)

| Function | Description | Import Path |
|----------|-------------|-------------|
| `port` | Find available network port | `goldies/node/port` |
| `sh` | Execute shell commands | `goldies/node/sh` |

## Library Features

- **Array Utilities**: Deduplication, filtering, and more
- **DOM Utilities**: Element selection, class manipulation, and attribute handling
- **Color Utilities**: Color validation and contrast calculation
- **File Utilities**: Directory tree generation, file type detection
- **String Utilities**: Pattern matching, username detection
- **Type Checking**: Comprehensive type checking utilities
- **Object Utilities**: Cloning, filtering, and property manipulation
- **General Utilities**: URL parsing, query string building, and more

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
