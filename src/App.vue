<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Fractional Calculator</router-link> |
      <router-link to="/websocket">Websocket</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
  font-style: 16px;
  line-height: 1.4;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
