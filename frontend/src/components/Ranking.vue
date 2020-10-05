<template>
  <div class="card">
    <h2>Ciudades con mas casos</h2>
    <div class="item" v-for="city in topCitys" :key="city.ciudad">
      <div class="cityCases">
        <span class="cityName">{{ city.ciudad }}: </span>
        <span class="number">{{ city.numero_de_casos }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: ['topCitys'],
}
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.card {
  margin-top: 10%;
  padding: 100px;
  border-radius: 30px !important;
  text-align: right;
  color: white;
  background: #4861ec;
  h2 {
    font-weight: 800;
  }
  .item {
    .cityName {
      font-weight: 600;
    }
    span {
      font-size: 1.3rem;
    }
  }
}
</style>
