"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "8080";

module.exports = {
	entry: [
		`webpack-dev-server/client?https://${HOST}:${PORT}`, 
		`webpack/hot/only-dev-server`,
		`./index.jsx` 
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
			noInfo: true,  
			hot: true,
			//https: true,
			inline: true,
			port: PORT,
			host: HOST
		},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
			{from: './index.html'}
		]),
	]
};
