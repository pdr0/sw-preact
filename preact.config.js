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

		runtimeCaching: [{
			urlPattern: /src/,
			handler: 'cacheFirst'
		}, {
			urlPattern: /api\/yourSuperCriticalAPI\//,
			handler: 'networkOnly'
		}],
		filename: 'service-worker.js',
		skipWaiting: true,
		clientsClaim: true
	};

	return preactCliSwPrecachePlugin(config, precacheConfig);
}

