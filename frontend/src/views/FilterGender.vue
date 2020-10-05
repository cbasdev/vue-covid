<template>
  <div class="filter-gender">
    <donut-chart
      v-if="loading"
      :lengthMale="lengthMale"
      :lengthFemale="lengthFemale"
    />

    <!-- <ul>
      <li v-for="male in femaleCases" v-bind:key="male.id">
        {{ male }}
      </li>
    </ul> -->
  </div>
</template>

<script>
import axios from 'axios'
import DonutChart from '../components/DonutChart.vue'

export default {
  name: 'FilterGender',
  props: ['prueba'],
  components: {
    DonutChart,
  },
  data() {
    return {
      message: 'Filtro por género',
      femaleCases: [],
      maleCases: [],
      lengthFemale: 0,
      lengthMale: 0,
      loading: false,
    }
  },

  mounted() {
    let vue = this
    vue.loading = false
    axios
      .get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
      .then((response) => {
        vue.femaleCases = response.data.filter((user) => user.sexo == 'F')
        vue.maleCases = response.data.filter((user) => user.sexo == 'M')
        vue.lengthFemale = vue.femaleCases.length
        vue.lengthMale = vue.maleCases.length
        vue.loading = true
      })
  },
}
</script>

<style lang="scss" scoped></style>
