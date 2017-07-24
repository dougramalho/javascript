const path = require('path');

module.exports = {
	entry: "./src/traditionalInterval.js",
	output: {
		path: path.resolve(__dirname, "./dist/assets"),
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
		        exclude: /node_modules/,
		        query: {
		          presets: ['latest', 'stage-0']
		        }
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: 'json-loader'
			},
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'

            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
            	test: /\.(jpe?g|png|gif|svg)$/i,
			    loaders: [
			      'file?hash=sha512&digest=hex&name=[hash].[ext]',
			      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
			    ]
            }
		]
	},
    plugins: []
}