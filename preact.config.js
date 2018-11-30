const WorkboxPlugin = require('workbox-webpack-plugin');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	config.plugins.push(
		new WorkboxPlugin.InjectManifest({
			importWorkboxFrom: 'cdn',
			swSrc: './service-worker.js',
			swDest: './service-worker.js',
			include: [/\.html$/, /\.js$/, /\.svg$/, /\.css$/, /\.png$/, /\.ico$/, /\.jpg$/, /\.json$/],
			importsDirectory: './src'
		}),
	);

	return config;
}

