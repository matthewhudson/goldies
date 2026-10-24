import { readFileSync, writeFileSync } from 'node:fs';
import { defineConfig } from 'tsdown';

// require('goldies') returns the namespace object (`module.exports = goldies`), so its
// declarations need `export =`. tsdown only emits that when an entry's sole export is
// the default, and index.ts also exports the Goldies interface.
function useExportEquals(file: string): void {
  const fixed = readFileSync(file, 'utf8')
    .replace(/^export interface Goldies /m, 'interface Goldies ')
    .replace(/^export \{ goldies as default \};$/m, 'export = goldies;');
  if (!fixed.includes('export = goldies;') || /^export (?!=)/m.test(fixed)) {
    throw new Error(
      `Unexpected declarations in ${file}: update useExportEquals in tsdown.config.ts`
    );
  }
  writeFileSync(file, fixed);
}

// tsdown points the top-level `types` at the CJS declarations (`export =`). Keep it on the
// ESM ones (`export default`), as 5.0 shipped, so `import goldies from 'goldies'` keeps
// compiling under moduleResolution "node" without esModuleInterop. Runs after tsdown
// writes package.json.
function keepEsmTypes(): void {
  const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
  pkg.types = './dist/index.d.mts';
  writeFileSync('package.json', `${JSON.stringify(pkg, null, 2)}\n`);
}

export default defineConfig([
  {
    // Every utility is its own entry, so each becomes a subpath export
    // (src/array/dedupe.ts -> goldies/array/dedupe) without being listed anywhere.
    entry: [
      'src/**/*.ts',
      '!src/**/*.test.ts',
      '!src/**/*.d.ts',
      // The browser bundle is built separately below
      '!src/browser.ts',
    ],
    format: ['esm', 'cjs'],
    platform: 'node',
    target: 'es2022',
    tsconfig: 'tsconfig.build.json',
    dts: true,
    sourcemap: true,
    outDir: 'dist',
    exports: {
      // Also writes main, module and types (see keepEsmTypes)
      legacy: true,
      customExports(exports) {
        // Bundlers targeting browsers get the UMD bundle, without the Node-only utilities
        exports['.'] = {
          browser: {
            types: './dist/browser/goldies.min.d.ts',
            default: './dist/browser/goldies.min.js',
          },
          ...exports['.'],
        };
        return exports;
      },
    },
    hooks: {
      'build:done': () => {
        useExportEquals('dist/index.d.cts');
        keepEsmTypes();
      },
    },
  },
  {
    // The <script> build: window.goldies, without the Node-only utilities
    entry: { goldies: 'src/browser.ts' },
    format: ['umd'],
    globalName: 'goldies',
    platform: 'browser',
    target: 'es2022',
    tsconfig: 'tsconfig.build.json',
    dts: false,
    minify: true,
    sourcemap: true,
    outDir: 'dist/browser',
    outputOptions: { entryFileNames: 'goldies.min.js' },
  },
  {
    // Declarations for the "browser" export condition (UMD builds don't emit them)
    entry: { 'goldies.min': 'src/browser.ts' },
    format: ['esm'],
    platform: 'browser',
    tsconfig: 'tsconfig.build.json',
    dts: { emitDtsOnly: true },
    outDir: 'dist/browser',
  },
]);
