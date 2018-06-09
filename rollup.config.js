import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.jsx',
	output: {
		file: 'public/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find date-fns in node_modules
        replace({ 'process.env.NODE_ENV': JSON.stringify(env) }), // Must have or FB invariant error.
		commonjs(), // converts date-fns to ES modules
		production && uglify(), // minify, but only in production
        babel({ exclude: 'node_modules/**' })
	]
};
