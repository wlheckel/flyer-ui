/**
 * 解决单元测试打包需求
 *
 */
const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test:/\.js$/,
      loader:'babel-loader',
      include:[path.resolve('../src'),path.resolve('../test')],
      exclude:path.resolve(__dirname,'node_modules')
    },{
      test: /\.js$/,
      loader: 'istanbul-instrumenter-loader',
      options: { esModules: true },
      include: [
        path.resolve('../src/util')
      ]
    }]
  }
}