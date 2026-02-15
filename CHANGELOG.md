# goldies

## 5.0.1

### Patch Changes

- c0d7f11: Enable previously skipped tests and improve test coverage
  - Enable 45 skipped tests in DOM and Node modules (all now passing)
  - Add missing tests for isUrl utility function (14 new tests)
  - Fix isUrl implementation to always return boolean instead of truthy/falsy values
  - Improve JSDOM setup to properly support all HTML element types
  - Remove unmockable edge case test in port utility
  - All 276 tests now passing with excellent coverage across the library

## 5.0.0

### Major Changes

- de6dfc0: # Goldies v5.0.0

  ## Modern Library Infrastructure and TypeScript Improvements
  - Added modern tree-shakable exports enabling direct imports of individual functions
  - Fixed TypeScript declaration generation and path mapping
  - Updated build system to maintain backward compatibility
  - Switched from semantic-release to Changesets for better release management
  - Added comprehensive developer documentation with import examples and bundle size comparisons
  - Added conventional commit enforcement with commitlint
  - Upgraded to ESLint v9 with modern flat configuration
  - Improved TypeScript type safety and reduced use of `any` types
  - Added proper return types to all utility functions
