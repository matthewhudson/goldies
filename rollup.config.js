import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import terser  from '@rollup/plugin-terser'

const input = 'src/index.js'

const plugins = [resolve(), commonjs(), terser()]

// Add any external dependencies that shouldn't be bundled
const external = []

export default [
  {
    input,
    output: {
      file: 'dist/cjs/goldies.js',
      format: 'cjs'
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: 'dist/esm/goldies.js',
      format: 'esm'
    },
    plugins,
    external
  },
  {
    input,
    output: {
      file: 'dist/browser/goldies.min.js',
      format: 'umd',
      name: 'goldies'
    },
    plugins,
    external
  }
]
