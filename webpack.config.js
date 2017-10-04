var path = require('path');
var webpack = require('webpack');
const autoprefixer = require('autoprefixer');

var manifest = require('./package.json');
var getPostcssPluginStack = require('./postcss-plugin-stack.js');

var commentHeader = 'Gitter Sidecar v' + manifest.version + '\nhttps://sidecar.gitter.im/';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'sidecar.js',
    library: 'sidecar'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(commentHeader),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer
        ]
      }
    })
  ]
};
