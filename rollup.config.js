import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import filesize from 'rollup-plugin-filesize'
import postcss from 'rollup-plugin-postcss'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  external: [
    ...Object.keys(pkg.peerDependencies),
    ...Object.keys(pkg.dependencies),
  ],
  plugins: [
    postcss({
      extract: false,
      modules: true,
    }),
    resolve(),
    babel({
      exclude: ['node_modules/**'],
    }),
    filesize(),
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      globals: { react: 'React' },
      name: 'comlib',
      sourcemap: true,
    },
    { file: pkg.module, format: 'es', exports: 'named' },
  ],
}
