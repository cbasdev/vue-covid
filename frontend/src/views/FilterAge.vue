<template>
  <div class="filter-age">
    <div v-if="!loading">cargando...</div>
    <div class="pagination" v-if="loading">
      <pagination-card :itemsSelect="selectCases" :typeSelect="selectGender" />
      <div class="buttonsBlock">
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(filter_0_to_19)
              selectGender = 'Femeninos'
            }
          "
          variant="outline-primary"
        >
          0 a 19 años
        </b-button>
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(filter_20_to_39)
              selectGender = 'Masculinos'
            }
          "
          variant="outline-primary"
        >
          20 a 39 años
        </b-button>
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(filter_40_to_59)
              selectGender = 'Masculinos'
            }
          "
          variant="outline-primary"
        >
          40 a 59 años
        </b-button>
        <b-button
          v-on:click="
            () => {
              selectCases = mapCases(filter_60_to_more)
              selectGender = 'Masculinos'
            }
          "
          variant="outline-primary"
        >
          60 años o mas
        </b-button>
      </div>
    </div>

    <div class="donut">
      <donut-chart
        v-if="loading"
        :seriesSelected="[
          filter_0_to_19.length,
          filter_20_to_39.length,
          filter_40_to_59.length,
          filter_60_to_more.length,
        ]"
        :labelsSelected="[
          'Casos de 0 a 19 años',
          'Casos de 20 a 39 años',
          'Casos de 40 a 59 años',
          'Casos de 60 años o mas',
        ]"
        :colorsSelected="['#4861ec', '#41c7c7', '#f649a8', '#85eba2']"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DonutChart from '../components/DonutChart'
import PaginationCard from '../components/PaginationCard'

export default {
  name: 'FilterAge',
  props: ['prueba'],
  components: {
    DonutChart,
    PaginationCard,
  },
  data() {
    return {
      message: 'Filtro por edad',
      filter_0_to_19: [],
      filter_20_to_39: [],
      filter_40_to_59: [],
      filter_60_to_more: [],
      maleCases: [],
      femaleCases: [],
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
        vue.filter_0_to_19 = response.data.filter((user) => user.edad < 20)
        vue.filter_20_to_39 = response.data.filter(
          (user) => user.edad > 20 && user.edad < 40
        )
        vue.filter_40_to_59 = response.data.filter(
          (user) => user.edad > 40 && user.edad < 60
        )
        vue.filter_60_to_more = response.data.filter((user) => user.edad > 60)
        vue.selectCases = this.mapCases(vue.filter_0_to_19)
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
          sexo: caseObj.sexo,
          estado: caseObj.atenci_n,
        }
      })

      return newMap
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-age {
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
