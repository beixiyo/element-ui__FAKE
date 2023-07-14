const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		devtool: 'source-map',
		resolve: {
			alias: {
				'@element': resolve(__dirname, './src/components/element'),
				'@style': resolve(__dirname, './src/assets/theme-chalk'),
			},
			extensions: ['.vue', '.js', '.json', '.scss']
		},
	}
});
