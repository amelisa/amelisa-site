module.exports = {
  name: 'server-side rendering',
  entry: './app/routes.js',
  target: 'node',
  output: {
    path: __dirname + '/public/js',
    filename: '../../server.generated/routes.js',
    publicPath: '/js/',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: [
      {include: /\.json$/, loaders: ['json']},
      {include: /\.js$/, loaders: ['babel'], exclude: /(node_modules)/},
      {include: /\.jsx$/, loaders: ['react-hot', 'babel', 'react-prefix'], exclude: /(node_modules)/},
      {include: /\.css$/, loaders: ['style', 'css']},
      {include: /\.md$/, loaders: ['html', 'markdown-highlight']}
    ]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  }
}
