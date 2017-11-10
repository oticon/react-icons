const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev');
const path = require('path');

const env = { dev: process.env.NODE_ENV };

const devServerConfig = {
  contentBase: path.join(__dirname, '../../src/'),
  historyApiFallback: { disableDotRule: true },
  overlay: {
    errors: true,
    warnings: true,
  },
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), devServerConfig);

server.listen(3000, '0.0.0.0');
