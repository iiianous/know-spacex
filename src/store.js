import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { get, filter, head } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_flights: [],
    current: {},
    video: ''
  },

  getters: {
    getAllFlights: (state) => { return state.all_flights },
    getCurrent: (state) => { return state.current },
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
    fetchData() {
      let apiUrl = 'https://api.spacexdata.com/v2/launches'

      axios.get( apiUrl )
        .then( ( { data } ) => {
          console.log(data)
          this.commit('FETCH_DATA', data)
        })
        .catch( error => {
          console.log( new Error('Error', error.message ) )
        })
    },

    findFlighNumber( {state, commit}, payload ) {
      console.log( 'PAYLOAD', payload  )

      let result = filter( state.all_flights, function(o) { 
        return o.flight_number == payload; 
      });

      console.log( 'RESULT:', head(result) )
      let {links} = result
      // console.log( 'LINKS:', get( head(result), ['links', 'video_link'] ) )
      commit('SET_CURRENT',  head(result))
      commit('SET_VIDEO', get( head(result), ['links', 'video_link'] ) )
      // console.log( 'ALL FLIGHTS', state.all_flights  )
    }
  }
})
