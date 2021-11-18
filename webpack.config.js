/****************************************************************************
 ** Copied this file from the yFiles for HTML 2.3.0.4 package
 ** path: yFiles-for-HTML-Complete-2.3.0.4\demos-ts\toolkit\angular

 ** Moment Locales Plugin
 ** https://github.com/iamakulov/moment-locales-webpack-plugin
 ***************************************************************************/
const YWorksOptimizerPlugin = require('@yworks/optimizer/webpack-plugin');

module.exports = function (config) {
  // Obfuscate yFiles modules and usages for production build
  if (config.mode === 'production') {
    // Obfuscate yFiles modules and usages for production build
    config.plugins.push(
      new YWorksOptimizerPlugin({
        logLevel: 'info',
        blacklist: ['run', 'update', 'template']
      })
    )
  }

  return config
}
