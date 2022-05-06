import path from 'path'
import alias from '@rollup/plugin-alias'
import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

const customResolver = resolve({
  extensions: ['.js', '.jsx', '.ts', '.tsx']
})

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'lib/bundle.js',
      format: 'es'
    },
    {
      file: 'lib/bundle.min.js',
      format: 'es',
      name: 'boatUI',
      plugins: [terser()]
    }
  ],
  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      customResolver
    }),
    resolve(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ],
  external: ['react', 'antd']
}
