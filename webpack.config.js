const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackBar = require('webpackbar')
const webpack = require('webpack')

const isDevMode = process.env.NODE_ENV === 'development'

const pluginsCommon = [
	new WebpackBar(),
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin({
		filename: 'style.css',
	}),
	new HtmlWebpackPlugin({
		title: 'Page title',
		template: './src/html/index.html',
		filename: 'index.html',
		inject: 'body',
		minify: {
			removeComments: true,
			collapseWhitespace: false,
		},
	}),
]

const pluginsDev = [...pluginsCommon, new webpack.HotModuleReplacementPlugin()]

const plugins = isDevMode ? pluginsDev : pluginsCommon

module.exports = {
	devtool: isDevMode ? 'source-map' : false,
	entry: {
		index: ['./src/index.ts', './src/style/import.scss'],
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
		alias: {
			'@': resolve(__dirname, './src/'),
			style: resolve(__dirname, './src/style'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					// Maybe make something here with MiniCssExtractPlugin.loader
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	devServer: {
		// Show info about dev server
		noInfo: false,
		// Port of dev server
		port: 8080,
	},
	output: {
		path: resolve(__dirname, 'dist/'),
		filename: '[name].js',
	},
	plugins,
}
