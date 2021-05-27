<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Button icon-position="right">我是按钮</Button>
    <Button>我是按钮</Button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
