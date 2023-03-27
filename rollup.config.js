import fs from 'fs/promises'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import terser from '@rollup/plugin-terser'
import replace from '@rollup/plugin-replace'
import polyfills from 'rollup-plugin-node-polyfills'
import polyfillNode from 'rollup-plugin-polyfill-node'

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
  {
    input: 'src/index.js',
    output: {
      name: 'goldies',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      resolve({
        preferBuiltins: false
      }),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        plugins: ['@babel/plugin-transform-runtime']
      }),
      polyfills(),
      polyfillNode(),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true
      }),
      env === 'production' && terser()
    ]
  },
  {
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies),
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'esm', sourcemap: true }
    ],
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
        preventAssignment: true
      }),
      env === 'production' && terser()
    ]
  }
]
