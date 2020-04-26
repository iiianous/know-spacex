import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import get from 'lodash/get'
import filter from 'lodash/filter'
import head from 'lodash/head'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_flights: [],
    current: {},
    video: '',

    first_stage: []
  },

  getters: {
    getAllFlights: (state) => state.all_flights,
    getCurrent: (state) => state.current,
    getVideo: state => state.video,
  },

  mutations: {
    FETCH_DATA(state, payload) {
      state.all_flights = payload
    },

    SET_CURRENT(state, payload) {
      state.current = payload
    },

    SET_VIDEO(state, payload) {
      state.video = payload
    }
  },

  actions: {
    async fetchData({commit}) {
      let apiUrl = 'https://api.spacexdata.com/v2/launches'

      try {
        const { data } = await axios.get( apiUrl )
        commit('FETCH_DATA', data)
      } catch (error) { }
    },

    findFlightNumber( {state, commit}, payload ) {
      const result = filter( state.all_flights, (item) => item.flight_number == payload);

      const { links } = result
      commit('SET_CURRENT', head(result))
      commit('SET_VIDEO', get( head(result), ['links', 'youtube_id'] ) )
    }
  }
})
