// module.exports = {
//   // lintOnSave: false,
// };

const path = require('path');

module.exports = {
  devServer: {
    port: 8000,
    host: 'localhost',
    disableHostCheck: true,
  },
  configureWebpack: config => {
    config.devtool = 'source-map';
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       modernizr$: path.resolve(__dirname, '.modernizrrc'),
  //     },
  //   },
  // },
  // chainWebpack(config) {
  //   config.module
  //     .rule('modernizr')
  //     .test(/\.modernizrrc$/)
  //     .use('webpack-modernizr-loader')
  //     .loader('webpack-modernizr-loader');
  // },
};
