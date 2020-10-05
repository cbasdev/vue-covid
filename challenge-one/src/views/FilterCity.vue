<template>
  <div class="filter-city">
    <div v-if="!loading">cargando...</div>
    <div class="pagination" v-if="loading">
      <ranking :topCitys="topFiveCitys" />
    </div>
    <div class="donut">
      <donut-chart
        v-if="loading"
        :seriesSelected="[
          topFiveCitys[0].numero_de_casos,
          topFiveCitys[1].numero_de_casos,
          topFiveCitys[2].numero_de_casos,
          topFiveCitys[3].numero_de_casos,
          topFiveCitys[4].numero_de_casos,
        ]"
        :labelsSelected="[
          topFiveCitys[0].ciudad,
          topFiveCitys[1].ciudad,
          topFiveCitys[2].ciudad,
          topFiveCitys[3].ciudad,
          topFiveCitys[4].ciudad,
        ]"
        :colorsSelected="[
          '#fbf34c',
          '#4861ec',
          '#41c7c7',
          '#f649a8',
          '#85eba2',
        ]"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DonutChart from '../components/DonutChart'
import Ranking from '../components/Ranking'

export default {
  name: 'FilterCity',
  props: ['prueba'],
  components: {
    DonutChart,
    Ranking,
  },
  data() {
    return {
      message: 'Ranking de ciudades',
      sortCitys: [],
      topFiveCitys: [],
      loading: false,
    }
  },

  mounted() {
    let vue = this
    vue.loading = false
    axios
      .get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
      .then((response) => {
        vue.sortCitys = vue.countCitys(response.data)
        vue.topFiveCitys = vue.sortCitys.slice(0, 5)
        vue.loading = true
      })
  },

  methods: {
    countCitys: function(data) {
      var matriz = {}
      data.forEach(function(registro) {
        var city = registro['ciudad_de_ubicaci_n']
        matriz[city] = matriz[city] ? matriz[city] + 1 : 1
      })
      var tempCitys = Object.keys(matriz)
      var matrizCitys = []
      tempCitys.forEach(function(city) {
        matrizCitys.push({
          ciudad: city,
          numero_de_casos: matriz[city],
        })
      })
      return matrizCitys.sort(function(a, b) {
        return b.numero_de_casos - a.numero_de_casos
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-city {
  padding: 0 5% 0 5%;
  .pagination {
    align-content: center;
    display: block;
    width: 45%;
    float: left;
  }
  .donut {
    padding: 30px;
    width: 55%;
    float: left;
  }
}
</style>
