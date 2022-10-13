import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';

import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

const pkg = require('./package.json');
const extensions = ['.js, .ts', '.jsx', '.tsx'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({ extensions }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        exclude: 'node_module/**',
        extensions,
      }),
      peerDepsExternal(),
      commonjs(),
      terser(),
      url(),
      svgr({ icon: true }),
      alias({
        resolve: extensions,
        entries: [{ find: '@', replacement: './src' }],
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
