import chai, { expect } from 'chai'
import { mount, shallowMount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/components/Button.vue'

describe('Example Test', () => {
  it('"1" 存在', () => {
    const a = expect(1).to.exist
    console.log(a)
  })

  it('HelloWorld 通过 message 传值测试', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
