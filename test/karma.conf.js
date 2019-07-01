// Karma configuration
// Generated on Wed Jun 26 2019 22:29:37 GMT+0800 (中国标准时间)
const webpackTest = require('../build/webpack.test.conf')

module.exports = function (config) {
  config.set({

    frameworks: ['mocha','chai'],
    files: [
      './index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './index.js': ['webpack','sourcemap']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter:{
      dir:'./coverage',
      reporters:[
        {
          type:'lcov',subdir:'.'
        },{
          type:'text-summary'
        }
      ]
    },
    browsers: ['ChromeHeadless'],
    webpack: webpackTest,
    webpackMiddleware: {
      noInfo: true
    }
  })
}
