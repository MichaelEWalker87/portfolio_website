<template>
  <div id="app">
    <the-container>
    <div id="nav">
      <router-link to="/">
        <img alt="Home" src="./images/Home_Red.png"/>
        <p>Home</p>
      </router-link> |
      <router-link to="/project">
        <img alt="Projects" src="./images/NoteBook_color.png"/>
        <p>Projects</p>
      </router-link>
    </div>
      <router-view/>
    </the-container>
  </div>
</template>

<script>
import TheContainer from './components/TheContainer.vue'
export default {
    name: 'App',
    components: {
    TheContainer
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
