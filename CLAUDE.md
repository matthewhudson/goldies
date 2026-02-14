# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Goldies is a tree-shakable JavaScript utility library that provides helper functions organized by category (array, color, convert, dom, files, format, node, object, string, types, utils). The library supports multiple consumption patterns:
- Full namespace imports (e.g., `import goldies from 'goldies'`)
- Tree-shakable direct imports (e.g., `import { dedupe } from 'goldies/array/dedupe'`)
- Environment-specific builds (Node.js vs Browser)

## Common Commands

```bash
# Install dependencies
npm install

# Run all tests (uses Vitest with JSDOM environment)
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file (Vitest handles TypeScript files directly)
npx vitest src/array/dedupe.test.ts

# Watch mode for development
npx vitest watch

# Build all bundles (ESM, CJS, UMD, and individual modules)
npm run build

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Type checking without emitting files
npm run typecheck

# Full validation (lint + test + build)
npm run validate

# Release workflow (build + publish with changesets)
npm run release
```

## Architecture

### Dual Entry Points

The library has two main entry points:
- **`src/index.ts`**: Full Node.js bundle (includes `files/*` and `node/*` utilities)
- **`src/browser.ts`**: Browser-only bundle (excludes Node.js-specific utilities)

### Build System (Rollup)

The build creates three types of outputs:

1. **Monolithic bundles** (`dist/cjs/goldies.js`, `dist/esm/goldies.js`):
   - Full library with namespace exports
   - Used when importing: `import goldies from 'goldies'`

2. **Browser UMD bundle** (`dist/browser/goldies.min.js`):
   - Minified browser build
   - Excludes Node.js-specific utilities
   - Uses polyfills for Node built-ins

3. **Individual ESM modules** (`dist/modules/**`):
   - Each utility is built as a separate module
   - Enables tree-shaking for optimal bundle size
   - Used when importing: `import { dedupe } from 'goldies/array/dedupe'`

### Code Organization

- Each utility function lives in its own file with a co-located test file (e.g., `src/array/dedupe.ts` + `src/array/dedupe.test.ts`)
- Utilities are organized by category: `array/`, `color/`, `convert/`, `dom/`, `files/`, `format/`, `node/`, `object/`, `string/`, `types/`, `utils/`
- Node.js-only utilities: `files/*`, `node/*` (excluded from browser build)
- Available in both builds: `array/*`, `color/*`, `convert/*`, `dom/*`, `format/*`, `object/*`, `string/*`, `types/*`, `utils/*`

## Adding New Utilities

When adding a new utility function, you must update **four** files:

1. **Create the utility file**: `src/<category>/<name>.ts`
2. **Create the test file**: `src/<category>/<name>.test.ts`
3. **Update `rollup.config.js`**: Add entry in the individual modules input object
4. **Update `package.json`**: Add export entry with types and import paths

Example for adding `array/unique`:

```javascript
// rollup.config.js - add to individual modules input object
'array/unique': 'src/array/unique.ts',

// package.json - add to exports object
"./array/unique": {
  "types": "./dist/modules/types/array/unique.d.ts",
  "import": "./dist/modules/array/unique.js"
}
```

Also add the import and export to:
- `src/index.ts` (for Node.js bundle)
- `src/browser.ts` (for browser bundle, if applicable)

## Key Conventions

- **Naming**: camelCase for function names
- **Types**: Full TypeScript support with type definitions
- **Purity**: Utility functions should be pure and predictable
- **Tree-shaking**: Set `sideEffects: false` in package.json (already configured)
- **Testing**: All utilities require unit tests with comprehensive coverage
- **Versioning**: Use Changesets for version management (`npm run changeset`)
- **Security**: Watch for XSS, injection attacks, unsafe regex, and validate inputs at boundaries
- **Backwards compatibility**: Maintain compatibility for minor/patch versions

## Testing

- Test runner: Vitest with JSDOM environment
- Global test setup: `vitest.setup.ts` (mocks DOM globals)
- Coverage provider: v8
- All new functions must have corresponding test files

## TypeScript

- Target: ES2022
- Configuration files:
  - `tsconfig.json`: Main TypeScript config
  - `tsconfig.typecheck.json`: Type checking only (no emit)
- Type definitions are generated during build to `dist/modules/types/`

## Git Workflow

### Conventional Commits (Enforced)

All commits **must** follow the [Conventional Commits](https://www.conventionalcommits.org/) format. Commitlint with Husky hooks automatically enforces this.

**Format**: `type(optional-scope): subject`

**Allowed types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature or bug fix)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD configuration changes
- `chore`: Maintenance tasks
- `revert`: Revert previous commit
- `release`: Version releases

**Examples**:
```
feat(array): add unique utility function
fix(color): handle edge case in getContrastColor for invalid hex values
docs: update README with new examples
test(object): add coverage for pick function
```

### Branch and PR Workflow

1. **Always create a new branch** for your changes:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/bug-description
   ```

2. **Open a pull request** against `main` branch
   - PRs trigger CI checks (lint, typecheck, test, build, changeset check)
   - **All PRs must include a changeset** (see Release Process section)
   - Exception: Add `no-changeset` label for docs/tests/chores only
   - All checks must pass before merging
   - GitHub bot/reviewers will review the PR

3. **Never commit directly to `main`** - all changes go through PRs

4. **Dependabot PRs** are automatically excluded from changeset requirements and can auto-merge for patch/minor updates

5. **Use changesets** for version management:
   ```bash
   npm run changeset
   ```
   This creates a changeset file that will be used to generate changelogs and version bumps on release.

## Release Process (Semi-Automated)

The project uses [Changesets](https://github.com/changesets/changesets) for version management and releases.

### Creating a Changeset

When you make changes that should be included in the next release:

```bash
npm run changeset
```

This prompts you to:
1. Select the release type: **patch** (bug fixes), **minor** (new features), or **major** (breaking changes)
2. Write a summary of the changes (used in changelog)
3. Creates a markdown file in `.changeset/` directory

**Commit the changeset file** with your PR:
```bash
git add .changeset/*.md
git commit -m "feat(array): add unique utility"
```

**Important**: All PRs require a changeset. The `changeset-check.yml` workflow will fail if missing.

**Exception**: For docs-only, test-only, or chore changes that don't affect the package functionality, add the `no-changeset` label to your PR to bypass the check.

### Release Workflow (Automated)

The release workflow (`.github/workflows/release.yml`) is triggered when:
- Changeset files are pushed to `main` branch (automatic)
- Manually via GitHub Actions UI (workflow_dispatch)

**What happens automatically:**
1. Runs `changeset version` to bump version in `package.json`
2. Generates/updates `CHANGELOG.md`
3. Creates a git commit: `chore(release): version X.Y.Z`
4. Creates a git tag: `vX.Y.Z`
5. Pushes commit and tag to GitHub
6. Publishes package to npm registry
7. Creates a GitHub release with notes

### Manual Release (if needed)

```bash
# 1. Apply version bumps from changesets
npm run version-packages

# 2. Build and publish
npm run release
```

**Important**: Only maintainers with npm publishing rights should trigger releases. Most contributors only need to create changesets.
