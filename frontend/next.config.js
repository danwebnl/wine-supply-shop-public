const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack(config, options) {
    // only add plugin in development to client webpack config .
    // if (env === 'development' && !options.isServer) {
    //   config.plugins.push(new ForkTsCheckerWebpackPlugin());
    // }

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
  }
});
