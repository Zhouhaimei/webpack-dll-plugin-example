var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    'webpack-dev-server/client?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientTwo?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientThree?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientFour?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientFive?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientSix?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientSeven?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientEight?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientNine?http://localhost:3000': './src/index.jsx',
    'webpack-dev-server/clientTen?http://localhost:3000': './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./build/library/library.json')
    })
  ]
};
