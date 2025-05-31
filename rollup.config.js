import fs from 'fs/promises'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'
import polyfills from 'rollup-plugin-node-polyfills'
import polyfillNode from 'rollup-plugin-polyfill-node'
import typescript from '@rollup/plugin-typescript'

async function readJSONFile (filePath) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.error(`Error reading JSON file: ${error.message}`)
    return null
  }
}

const pkg = await readJSONFile('./package.json')

const env = process.env.NODE_ENV

export default [
  // Browser UMD bundle (monolithic)
  {
    input: 'src/browser.ts',
    output: {
      name: 'goldies',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: {
        'fs': 'fs',
        'path': 'path',
        'child_process': 'child_process',
        'net': 'net',
        'fs/promises': 'fs.promises'
      }
    },
    // No need to externalize Node modules for browser build as they're not imported
    plugins: [
      resolve({
        preferBuiltins: false,
        extensions: ['.ts', '.js'],
        browser: true
      }),
      typescript({
        compilerOptions: {
          target: 'es2022',
          module: 'esnext',
          skipLibCheck: true,
          declaration: false,
          declarationMap: false
        },
        sourceMap: true,
        inlineSources: true
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.ts', '.js'],
        plugins: ['@babel/plugin-transform-runtime']
      }),
      polyfillNode(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true
      }),
      env === 'production' && terser()
    ]
  },
  // Node.js bundles (monolithic)
  {
    input: 'src/index.ts',
    external: [...Object.keys(pkg.dependencies), 'fs', 'path', 'child_process', 'fs/promises', 'net'],
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'esm', sourcemap: true }
    ],
    plugins: [
      typescript({
        compilerOptions: {
          target: 'es2022',
          module: 'esnext',
          skipLibCheck: true,
          declaration: false,
          declarationMap: false
        },
        sourceMap: true,
        inlineSources: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true
      }),
      env === 'production' && terser()
    ]
  },
  // Individual modules for tree shaking (ESM)
  {
    input: {
      // Array modules
      'array/dedupe': 'src/array/dedupe.ts',
      
      // Color modules
      'color/getContrast': 'src/color/getContrast.ts',
      'color/isValidHexSimpleColor': 'src/color/isValidHexSimpleColor.ts',
      
      // Convert modules
      'convert/base64ToBlob': 'src/convert/base64ToBlob.ts',
      'convert/fromArray': 'src/convert/fromArray.ts',
      'convert/fromBase64': 'src/convert/fromBase64.ts',
      'convert/parseJSONFromBytes': 'src/convert/parseJSONFromBytes.ts',
      'convert/toBase64': 'src/convert/toBase64.ts',
      
      // DOM modules
      'dom/attr': 'src/dom/attr.ts',
      'dom/classes': 'src/dom/classes.ts',
      'dom/domify': 'src/dom/domify.ts',
      'dom/getCustomCSSVariables': 'src/dom/getCustomCSSVariables.ts',
      'dom/getDataAttributes': 'src/dom/getDataAttributes.ts',
      'dom/selectors': 'src/dom/selectors.ts',
      
      // Format modules
      'format/formatBytes': 'src/format/formatBytes.ts',
      
      // Object modules
      'object/clone': 'src/object/clone.ts',
      'object/filter': 'src/object/filter.ts',
      'object/has': 'src/object/has.ts',
      'object/pick': 'src/object/pick.ts',
      
      // String modules
      'string/endsWith': 'src/string/endsWith.ts',
      'string/findUsernames': 'src/string/findUsernames.ts',
      'string/startsWith': 'src/string/startsWith.ts',
      
      // Types modules
      'types/isDefined': 'src/types/isDefined.ts',
      'types/isJSON': 'src/types/isJSON.ts',
      'types/isNil': 'src/types/isNil.ts',
      'types/isNull': 'src/types/isNull.ts',
      'types/isUndefined': 'src/types/isUndefined.ts',
      'types/isUrl': 'src/types/isUrl.ts',
      
      // Utils modules
      'utils/buildQuery': 'src/utils/buildQuery.ts',
      'utils/escapeHTML': 'src/utils/escapeHTML.ts',
      'utils/getURLParams': 'src/utils/getURLParams.ts',
      'utils/isBrowser': 'src/utils/isBrowser.ts',
      'utils/isServer': 'src/utils/isServer.ts',
      'utils/reloadPageWhenOnline': 'src/utils/reloadPageWhenOnline.ts',
      'utils/s3': 'src/utils/s3.ts',
      'utils/sleep': 'src/utils/sleep.ts',
      
      // Node-specific modules
      'files/getDirectoryTree': 'src/files/getDirectoryTree.ts',
      'files/getFileType': 'src/files/getFileType.ts',
      'files/isDirectory': 'src/files/isDirectory.ts',
      'files/readFile': 'src/files/readFile.ts',
      'node/port': 'src/node/port.ts',
      'node/sh': 'src/node/sh.ts'
    },
    external: [...Object.keys(pkg.dependencies), 'fs', 'path', 'child_process', 'fs/promises', 'net'],
    output: {
      dir: 'dist/modules',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    plugins: [
      typescript({
        compilerOptions: {
          target: 'es2022',
          module: 'esnext',
          skipLibCheck: true,
          declaration: true,
          declarationMap: false,
          outDir: 'dist/modules',
          declarationDir: 'dist/modules/types'
        },
        sourceMap: true,
        inlineSources: true
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true
      }),
      env === 'production' && terser()
    ]
  }
]
