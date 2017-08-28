const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, 'assets', 'index.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /web-application\/node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'es2017', 'stage-0', 'react' ],
          plugins: [ 'transform-decorators-legacy' ]
        }
      },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=200000' }
    ]
  },
  output: {
    path: path.join(__dirname, 'target', 'assets'),
    filename: 'index.js',
    publicPath: '/assets/'
  },
  resolve: {
    modules: [ 'node_modules', 'assets' ]
  }
}
