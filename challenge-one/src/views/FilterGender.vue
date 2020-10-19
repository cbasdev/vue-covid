<template>
  <div class="filter-gender">
    <div v-if="!loading">cargando...</div>
    <div class="pagination" v-if="loading">
      <pagination-card :itemsSelect="selectCases" :typeSelect="selectGender" />
      <div class="buttonsBlock">
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(femaleCases)
              selectGender = 'Femeninos'
            }
          "
          variant="outline-primary"
        >
          Casos Femeninos
        </b-button>
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(maleCases)
              selectGender = 'Masculinos'
            }
          "
          variant="outline-primary"
        >
          Casos Masculinos
        </b-button>
      </div>
    </div>

    <div class="donut">
      <donut-chart
        v-if="loading"
        :seriesSelected="[lengthMale, lengthFemale]"
        :labelsSelected="['Casos Masculinos', 'Casos Femeninos']"
        :colorsSelected="['#41c7c7', '#f649a8']"
      />
    </div>
    <hr />
    <TestTitle />
  </div>
</template>

<script>
import axios from 'axios'
import DonutChart from '../components/DonutChart'
import PaginationCard from '../components/PaginationCard'
import TestTitle from '../components/LearnJest/TestTitle'

export default {
  name: 'FilterGender',
  props: ['prueba'],
  components: {
    DonutChart,
    PaginationCard,
    TestTitle,
  },
  data() {
    return {
      message: 'Filtro por género',
      femaleCases: [],
      maleCases: [],
      lengthFemale: 0,
      lengthMale: 0,
      loading: false,
      selectCases: [],
      selectGender: 'Femeninos',
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
        vue.selectCases = this.mapCases(this.femaleCases)
        vue.loading = true
      })
  },

  methods: {
    mapCases: function(cases) {
      let newMap = cases.map((caseObj) => {
        return {
          id: caseObj.id_de_caso,
          fecha: caseObj.fecha_de_notificaci_n.slice(0, -13),
          ciudad: caseObj.ciudad_de_ubicaci_n,
          departamento: caseObj.departamento,
          edad: caseObj.edad,
          estado: caseObj.atenci_n,
        }
      })

      return newMap
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-gender {
  padding: 0 5% 0 5%;
  .pagination {
    align-content: center;
    display: block;
    width: 60%;
    float: left;
    .btn-outline-primary {
      margin: 10px;
      padding: 8px 20px 8px 20px;
      border-width: 3px;
      color: #41c7c7;
      border-color: #41c7c7 !important;
    }
    .btn-outline-primary:hover {
      background-color: #41c7c7;
      color: white;
    }
  }
  .donut {
    padding: 30px;
    width: 40%;
    float: left;
  }
}
</style>
