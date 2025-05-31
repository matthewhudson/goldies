# Goldies

A wide-ranging collection of JavaScript helpers covering debugging, de-/serialization, sanitization, validation, HTTP requests and more.

[![npm version](https://badge.fury.io/js/goldies.svg)](https://badge.fury.io/js/goldies)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![CI](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml/badge.svg)](https://github.com/matthewhudson/goldies/actions/workflows/ci.yml)

## Installation

```bash
npm install goldies
```

## Usage

```typescript
import goldies from 'goldies';

// Array utilities
const uniqueArray = goldies.array.dedupe([1, 2, 2, 3]);

// DOM utilities
const element = goldies.dom.$('#myElement');
goldies.dom.addClass(element, 'active');

// Color utilities
const isValid = goldies.color.isValidHexSimpleColor('#ff0000');

// File utilities
const isDir = await goldies.files.isDirectory('/path/to/dir');

// String utilities
const hasUsername = goldies.string.findUsernames('Hello @user123');

// Type checking
const isDefined = goldies.types.isDefined(someValue);

// Object utilities
const cloned = goldies.object.clone(originalObject);

// Utility functions
const params = goldies.utils.getURLParams('https://example.com?foo=bar');
```

## Features

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
