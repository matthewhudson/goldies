# Copilot Code Review Instructions

## Project Context
This is a JavaScript utility library (`goldies`) that provides helper functions for common programming tasks including debugging, serialization, sanitization, validation, and HTTP requests.

## Review Focus Areas

### 1. Security
- Check for potential security vulnerabilities (XSS, injection attacks, unsafe regex)
- Verify input validation and sanitization
- Flag any hardcoded secrets or sensitive data
- Review permission scopes in GitHub Actions workflows

### 2. Code Quality
- Ensure functions have proper TypeScript types
- Check for edge cases and error handling
- Verify test coverage for new/modified functions
- Flag any breaking changes to public APIs

### 3. Build & CI Configuration
- Validate Rollup/build configuration changes
- Check GitHub Actions workflow permissions and triggers
- Verify conventional commit message format
- Ensure package.json exports are correct

### 4. Best Practices
- Check for proper tree-shaking support (side effects)
- Validate that utility functions are pure and predictable
- Ensure browser compatibility considerations
- Flag unnecessary dependencies

## Project-Specific Rules

- All utility functions should be independently importable (modular exports)
- Follow existing naming conventions (camelCase for functions)
- Maintain backwards compatibility for minor/patch versions
- Changes to color utilities should preserve contrast calculation accuracy
- All new functions require corresponding unit tests

## What NOT to Flag

- Minor style issues (Prettier handles formatting)
- Simple one-line changes
- Documentation-only updates
- Dependency updates (Dependabot handles these)

## Severity Guidelines

- **Critical:** Security vulnerabilities, breaking changes, permission issues
- **High:** Logic errors, missing error handling, type safety issues
- **Medium:** Performance concerns, missing tests, unclear code
- **Low:** Style suggestions, minor improvements
