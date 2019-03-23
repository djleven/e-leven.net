import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    window: {
      width: 0,
      height: 0,
      offsetTop: 0
    }
  },
  mutations: {
    heightResize (state, height) {
      state.window.height = height
    },
    widthResize (state, width) {
      state.window.width = width
    },
    setTopOffset (state, offset) {
      state.window.offsetTop = offset
    }
  },
  actions: {

  },
  getters: {
    getHeight: state => {
      return state.window.height
    },
    getWidth: state => {
      return state.window.width
    },
    getTopOffset: state => {
      return state.window.offsetTop
    }
  }
})
