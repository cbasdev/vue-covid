<template>
  <div id="app">
    <div id="nav">
      <h1>Casos de Covid en Colombia</h1>
      <router-link to="/">Agrupar por Género</router-link> |
      <router-link to="/filter-age">Agrupar por Edad</router-link> |
      <router-link to="/filter-city">Ciudades con mas casos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/_variables.scss';
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
  h1 {
    letter-spacing: 5px;
  }
  a {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $male-color;
      border-bottom: 1px solid $male-color;
    }
  }
}
</style>
