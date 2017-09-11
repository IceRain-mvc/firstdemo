<template>
  <div id="app">

    <br>
    <router-link to="/home">首页</router-link>
    <router-link to="/linked">联系人</router-link>
    <router-link to="/me">我的</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
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
  }

  .router-link-active {
    color: #ff0000;
    background-color: aquamarine;
  }
</style>
