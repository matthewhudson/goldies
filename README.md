# Goldies - "Good & Golden Oldies"

> ✨ 🔧 A collection of JavaScript helpers covering the DOM, debugging, de-/serialization, sanitization, validation, HTTP requests and more.

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/matthewhudson/goldies/main.yml)
[![codecov](https://codecov.io/github/matthewhudson/goldies/branch/main/graph/badge.svg?token=kVXZchiGn4)](https://codecov.io/github/matthewhudson/goldies)
![npm](https://img.shields.io/npm/v/goldies)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Using ES Modules](#using-es-modules)
  - [Using CommonJS](#using-commonjs)
  - [Using Script Tags and Globals](#using-script-tags-and-globals)
- [Background](#background)

## Installation

```bash
npm install goldies --save
```

## Usage

### Using ES Modules

```js
// Import specific functions from the package
import { dedupe } from 'goldies';
```

### Using CommonJS

```js
// Import specific functions from the package
const { dedupe } = require('goldies');
```

### Using Script Tags and Globals

Include the script tag in your HTML file:

```html
<script src="https://unpkg.com/goldies@5.0.0/dist/browser/goldies.min.js"></script>
```

Then, access the functions off the global goldies object:

```js
console.log('goldies.dedupe([1, 2, 2]) === %s', goldies.dedupe([1, 2, 2]));
```

## Background

The code and other tools here serve as my own personal reference points. In some
cases, they're URL tools, or DOM helpers. But more often than not, they're tiny
chunks of code I've forgotten and had to lookup on Google or StackOverflow.

Plan is to keep them here and add tests/benchmark/notes when appropriate.
