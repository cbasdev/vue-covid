import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'i am a title',
    loader: false,
    data: [],
  },
  getters: {
    title: (state) => state.title,
    data: (state) => state.data,
    loader: (state) => state.loader,
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
      state.loader = true
    },
  },
  actions: {
    async GET_CASES(context) {
      axios
        .get('https://www.datos.gov.co/resource/gt2j-8ykr.json')
        .then((response) => {
          context.commit('SET_DATA', response.data)
        })
    },
  },
  modules: {},
})
