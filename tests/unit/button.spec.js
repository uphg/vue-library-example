import chai, { expect } from 'chai'
import { mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import Button from '@/components/Button.vue'

// describe('Example Test', () => {
//   it('测试 Button 触发 Click 事件', () => {
//     const wrapper = mount(Button)
    
//     const vm = wrapper.vm
//     const callback = sinon.fake();
//     vm.$on('click', callback)
//     vm.$el.click()
//     expect(callback).to.have.been.called
//   })

//   // 测试 CSS 样式案例
//   it('测试 Button icon-position 属性的 CSS 是否生效', () => {
//     const wrapper = mount(Button, {
//       attachToDocument: true,
//       propsData: {
//         iconPosition: 'right'
//       }
//     })
//     const vm = wrapper.vm
//     const button = vm.$el
//     expect(getComputedStyle(button).order).to.eq('2')
//   })
// })
