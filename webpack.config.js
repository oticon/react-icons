const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  return {
    entry: {
      app: ['./src/index'],
    },
    output: {
      path: path.join(__dirname, './lib/'),
      filename: 'index.js',
    },
    resolve: {
      extensions: ['.js'],
      modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader', query: { cacheDirectory: true } }],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { modules: true, importLoaders: 1 }},
            'postcss-loader'
          ],
        },
        {
          test: /\.(ico|eot|svg|ttf|woff|woff2)$/,
          use: [{ loader: 'url-loader?name=[name].[ext]' }],
        }
      ],
    },
  };
};
