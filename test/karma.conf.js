// Karma configuration
// Generated on Wed Jun 26 2019 22:29:37 GMT+0800 (中国标准时间)
const unitWebpack = require('../build/webpack.unit.config')

module.exports = function (config) {
  config.set({

    frameworks: ['jasmine'],
    files: [
      'index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'index.js': ['webpack']
    },
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['text-summary','html'],
      fixWebpackSourcePaths: true,
      dir:"coverage"
    },
    port: 9876,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    webpack: unitWebpack
  })
}
