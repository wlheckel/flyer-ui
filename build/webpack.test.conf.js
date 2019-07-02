/**
 * 解决单元测试打包需求
 *
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  resolve:{
    extensions:['.vue','.js','.json'],
    alias:{
      '@':path.resolve(__dirname,'..','src')
    }
  },
  module: {
    rules: [
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}