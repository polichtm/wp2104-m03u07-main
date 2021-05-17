const { IgnorePlugin } = require('webpack');

module.exports = {
	plugins: [
		new IgnorePlugin({
			resourceRegExp: /^pg-native$/,
		}),
	],
};