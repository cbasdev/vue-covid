<template>
  <div id="app">
    <div id="nav">
      <h1>Reto 2: Covid en Colombia</h1>
      <router-link to="/">Filtrar por Género</router-link> |
      <router-link to="/filter-age">Filtrar por Edad</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src

export default {
  name: 'App',
  mounted() {
    this.GET_CASES()
    this.requestData()
  },

  methods: {
    ...mapActions(['GET_CASES']),
    requestData() {
      setTimeout(() => {
        this.GET_CASES()
        this.requestData()
      }, 600000)
    },
  },
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
  border-top: 5px solid #41c7c7;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #41c7c7;
    }
  }
}
</style>
