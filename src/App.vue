<template>
  <div id="app">
    <img src="~@/assets/vue.png">
    <router-view/>
  </div>
</template>

<script>
import aaa from  "@/assets/vue.png"
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: url("~@/assets/vue.png") */
}
</style>
