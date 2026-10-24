// API reference for https://matthewhudson.github.io/goldies/api/ (npm run docs:generate).
//
// Documents exactly what the package exports: every subpath in package.json's
// build-generated `exports` (./array/dedupe -> src/array/dedupe.ts) becomes a page
// named after its import path.
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
const entryPoints = Object.keys(pkg.exports)
  .filter((subpath) => subpath !== '.' && subpath !== './package.json')
  .map((subpath) => `src/${subpath.slice(2)}.ts`);

/** @type {Partial<import('typedoc').TypeDocOptions>} */
export default {
  name: 'goldies',
  entryPoints,
  tsconfig: 'tsconfig.build.json',
  readme: 'README.md',
  // The rest of the site (the demo home page) comes from docs/
  out: 'site/api',
  gitRevision: 'main',
  // Doc mistakes (such as an @param naming a parameter that doesn't exist) fail CI
  treatWarningsAsErrors: true,
  navigationLinks: {
    Demo: 'https://matthewhudson.github.io/goldies/',
    GitHub: 'https://github.com/matthewhudson/goldies',
    npm: 'https://www.npmjs.com/package/goldies',
  },
};
