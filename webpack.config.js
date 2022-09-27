const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "production",
	devtool: 'inline-source-map',
	entry: {
		main: "./src/index.js",
	},
	devServer: {
		contentBase: "./dist"
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.(jpe?g|png)$/i,
			type: "asset",
		},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html"
		}),
	],
};