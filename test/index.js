
//收集所有的单元测试文件
const tests = require.context('./unit/',true,/spec\.js$/i)
tests.keys().forEach(tests)

const components = require.context('../src/util',true,/\.js$/i)
components.keys().forEach(components)