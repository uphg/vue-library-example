# Vue-library-example

Vue 库单元测试用例

1. 组件传值测试用例
2. 按钮点击测试用例


## 项目笔记

安装 Vue CLI

```sh
vue create .
```

运行单元测试

```sh
yarn test:unit
# 持续监听测试
yarn test:unit --watch
```

安装 sinon

```sh
yarn add -D sinon sinon-chai
```

使用 Vue CLI 集成的单元测试

测试 Button 按钮点击

```js
test('triggers a click', async () => {
  const wrapper = mount(Button)

  await wrapper.trigger('click')
})
```

## `mount()` 与 `shallowMount()` 的区别

mount 会挂载当前组件与它的子组件，但 shallowMount 只会加载当前组件，与它关联的子组件可能是残缺的

添加 karma 报错

```sh
TypeError: Cannot read property 'split' of undefined
```