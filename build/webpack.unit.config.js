/**
 * 解决单元测试打包需求
 *
 */
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'istanbul-instrumenter-loader',
      include: [
        path.resolve('../src/util')
      ]
    }]
  }
}