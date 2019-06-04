import Vue from 'vue'
import Vuex from 'vuex'
import window from './window/'
import works from './works'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    window,
    works
  }
})
