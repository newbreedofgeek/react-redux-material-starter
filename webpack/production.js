import webpack from 'webpack';
import baseConfig from './base';
import CompressionPlugin from 'compression-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import packageJson from '../package.json';

const plugins = [
  // ideally this should be how we do it, but how can we get the server.js to use this name in production??
  // new ExtractTextPlugin('[name].[hash].css'),
  new ExtractTextPlugin('styles.css'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    }
  }),
  new CompressionPlugin({
    asset: '[file].gz',
    algorithm: 'gzip',
    test: /\.css$|\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  })
];

const loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      'style',
      `css?minimize&modules&importLoaders=1&localIdentName=${packageJson.config.css}` +
      '!postcss' +
      '!sass'
    )
  },
  {
    test: /\.js$/,
    loaders: ['babel'],
    exclude: /node_modules/
  }
];

export default {
  ...baseConfig,
  // ideally this should be how we do it, but how can we get the server.js to use this name in production??
  // output: Object.assign({}, baseConfig.output, {
  //   filename: '[name].[hash].js'
  // }),
  plugins: [
    ...baseConfig.plugins,
    ...plugins
  ],
  module: Object.assign({}, baseConfig.module, {
    loaders: [
      ...baseConfig.module.loaders,
      ...loaders
    ]
  })
};
