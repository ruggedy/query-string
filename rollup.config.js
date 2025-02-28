import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	// {
	// 	input: 'index.js',
	// 	output: {
	// 		name: 'f1000UiComponents',
	// 		file: pkg.browser,
	// 		format: 'umd'
	// 	},
	// 	plugins: [
	// 		resolve(), // so Rollup can find `ms`
	// 		commonjs() // so Rollup can convert `ms` to an ES module
	// 	]
	// },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
    input: 'index.js',
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
		output: [
			{ name: "index.js", file: 'dist/index.js', format: 'cjs' }
		]
  },
];
