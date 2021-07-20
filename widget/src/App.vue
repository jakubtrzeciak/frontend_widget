<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">

  html {
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    margin: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(124deg, rgba(172, 143, 212, 0.7) 0%, rgba(58, 28, 109, 0.95) 100%), url(../public/images/background.png);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
