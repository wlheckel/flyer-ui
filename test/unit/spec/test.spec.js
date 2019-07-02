// const reverse = require('../../src/util/dom')
import reverse from '../../../src/util/dom'
describe('reverse', () => {
  it('reverse word', () => {
    expect(reverse('abc')).equal('cba')
  })
  it('reverse 传的参数长度为1返回自身', () => {
    expect(reverse('a')).equal('a')
  })
})
