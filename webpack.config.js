var webpack = require('webpack');
var path = require('path');

var config = {
	entry: './entry.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.styl$/,
				loader: 'style!css!stylus?include css&paths[]=someFolder,paths[]=anotherFolder'
			}
		]
	},
	stylus: {
		'include css': true,
		import: path.join(__dirname,'/styles/imported.styl'),
		define: {
			kokoko: function(){return '#FDE881'}
		}
	}
};

module.exports = config;