
// 收集所有的单元测试文件
const testsContext = require.context('./unit/', true, /spec\.js$/i)
testsContext.keys().forEach(testsContext)

const srcContext = require.context('../src', true, /^\.\/(?!main(\.js)?$)/)
console.log(srcContext.keys())
srcContext.keys().forEach(srcContext)
