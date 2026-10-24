// Checks the built package the way consumers load it. Run after `npm run build`.
//
// Imports below use the package's own name ("goldies"), which Node resolves
// through package.json "exports" (self-reference), so every path is exercised
// exactly as it would be from node_modules.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';

const root = new URL('../', import.meta.url);
const pkg = JSON.parse(readFileSync(new URL('package.json', root), 'utf8'));
const require = createRequire(import.meta.url);
const failures = [];

async function check(name, fn) {
  try {
    await fn();
    console.log(`ok   ${name}`);
  } catch (error) {
    failures.push(name);
    console.log(`FAIL ${name}\n     ${error.message.split('\n').join('\n     ')}`);
  }
}

const [{ files }] = JSON.parse(
  execFileSync('npm', ['pack', '--dry-run', '--json', '--ignore-scripts'], {
    cwd: root,
    encoding: 'utf8',
  })
);
const packed = new Set(files.map((file) => file.path));
const subpaths = Object.keys(pkg.exports).filter((key) => key !== '.');

const exportTargets = (conditions) =>
  typeof conditions === 'string' ? [conditions] : Object.values(conditions).flatMap(exportTargets);

await check('every export target is in the packed tarball', () => {
  const targets = [pkg.main, pkg.module, pkg.browser, pkg.types, ...exportTargets(pkg.exports)];
  const missing = targets
    .map((target) => target.replace(/^\.\//, ''))
    .filter((path) => !packed.has(path));
  assert.deepEqual(missing, [], 'export targets missing from the tarball');
});

await check('test declarations are not packed', () => {
  const testDeclarations = [...packed].filter((path) => path.endsWith('.test.d.ts'));
  assert.deepEqual(testDeclarations, []);
});

let cjsKeys = [];
await check("require('goldies') returns the namespace object", () => {
  const goldies = require('goldies');
  assert.equal(typeof goldies.array?.dedupe, 'function');
  assert.equal(typeof goldies.node?.sh, 'function');
  cjsKeys = Object.keys(goldies);
});

await check("import goldies from 'goldies' matches require()", async () => {
  const { default: goldies } = await import('goldies');
  assert.equal(typeof goldies.array?.dedupe, 'function');
  assert.deepEqual(Object.keys(goldies), cjsKeys);
});

for (const subpath of subpaths) {
  const specifier = `goldies${subpath.slice(1)}`;
  await check(`import '${specifier}' exports a function`, async () => {
    const mod = await import(specifier);
    const functions = Object.values(mod).filter((value) => typeof value === 'function');
    assert.ok(functions.length > 0, `${specifier} has no function exports`);
  });
}

await check('browser bundle runs without Node globals and is minified', () => {
  const code = readFileSync(new URL(pkg.browser, root), 'utf8');
  const context = { window: {}, document: {}, console, setTimeout };
  context.self = context;
  context.globalThis = context;
  vm.runInNewContext(code, context);
  const { goldies } = context;
  assert.equal(typeof goldies?.array?.dedupe, 'function', 'window.goldies was not defined');
  assert.ok(
    !('node' in goldies) && !('files' in goldies),
    'browser bundle includes Node-only utilities'
  );
  assert.ok(code.split('\n').length < 5, 'browser bundle is not minified');
});

if (failures.length > 0) {
  console.log(`\n${failures.length} smoke check(s) failed`);
  process.exit(1);
}
console.log('\nAll smoke checks passed');
