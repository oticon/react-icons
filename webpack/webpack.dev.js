const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
  const removeEmpty = array => array.filter(p => !!p);

  return {
    entry: {
      app: './src/index'
    },
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, '../lib/'),
      filename: '[name].dev.js',
      sourceMapFilename: '[name].dev.map',
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
          use: {
            fallback: 'style-loader',
            use: [
              'style-loader',
              { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: "[name]__[local]" }},
              'postcss-loader'
            ],
          },
        },
      ],
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.ejs'),
        filename: 'index.html',
        inject: 'body',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
        },
        SENTRYIO: JSON.stringify(false),
      }),
    ]),
  };
};
