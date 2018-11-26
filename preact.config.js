const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
	const precacheConfig = {
		staticFileGlobs: [
			'src/city.list.json',
			'src/cities.json'
		],
		filename: 'sw.js',
		clientsClaim: true,
		skipWaiting: true,
		runtimeCaching: [
			{
				urlPattern: '/',
				handler: 'networkFirst'
			}
		]
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}

