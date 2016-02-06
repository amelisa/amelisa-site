import webpack from 'webpack';
import config from './webpack.prod.babel.js';

//config.cache = true;
config.debug = true;
config.devtool = 'eval';

config.entry.unshift(
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
);

config.plugins = [
	new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin()
]

config.devServer = {
	publicPath:  config.output.publicPath,
	//contentBase: './public',
	hot:         true,
	inline:      true,
	lazy:        false,
	quiet:       true,
	noInfo:      true,
	historyApiFallback: true,
	headers:     {'Access-Control-Allow-Origin': '*'},
	stats:       {colors: true},
	proxy: {
    "*": "http://localhost:3000"
  }
}

module.exports = config;
// export default config;
