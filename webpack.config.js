const path = require("path");

module.exports = {
	mode: "production",
	output: {
		filename: "main.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				include: [path.resolve(__dirname, "./assets/js")],
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
};
