const webpack = require('webpack');
const path = require('path');

module.exports = () => {
  const removeEmpty = array => array.filter(p => !!p);

  return {
    entry: {
      app: ['./src/index'],
    },
    devtool: 'cheap-source-map',
    output: {
      path: path.join(__dirname, './lib/'),
      filename: 'index.js',
      sourceMapFilename: 'index.map',
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
    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
          unused: true,
          dead_code: true,
          drop_console: true,
        },
        output: {
          comments: false,
        },
        sourceMap: true,
      }),
    ]),
  };
};
