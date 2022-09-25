const path = require('path');

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
};