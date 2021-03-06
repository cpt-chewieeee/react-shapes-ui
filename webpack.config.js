const path = require('path');


module.exports = {

	entry: './src/index.js',

	module: {

		rules: [
			{

				test: /\.js$/,

				use: {
					loader: 'babel-loader',
				},
			},
			{

				test: /\.css$/,
				use: [

					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				],
			},
			{

				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},

	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},

	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '',

		filename: 'react-shapes-ui.js',

		// https://webpack.js.org/configuration/output/#output-librarytarget
		libraryTarget: 'umd',
	},
};
