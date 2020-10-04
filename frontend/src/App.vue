<template>
  <div id="app">
    <div id="nav">
      <h1>Casos de Covid en Colombia</h1>
      <router-link to="/">Agrupar por Género</router-link> |
      <router-link to="/filter-age">Agrupar por Edad</router-link> |
      <router-link to="/filter-city">Agrupar por Ciudades</router-link>
    </div>
    <router-view />
  </div>
</template>

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
