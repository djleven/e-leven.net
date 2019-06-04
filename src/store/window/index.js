import actions from './actions'
import { WindowProps } from './../../models/Window'

const mutations = {
  heightResize (state, height) {
    state.height = height
  },
  widthResize (state, width) {
    state.width = width
  },
  setTopOffset (state, offset) {
    state.offsetTop = offset
  },
  setScroll (state, data) {
    state.scroll = Object.assign(state.scroll, data)
  },
  setScrollItems (state, items) {
    state.scroll.items = items
  },
  resetWindowProps (state) {
    state = new WindowProps()
  }
}

const getters = {
  getHeight: state => {
    return state.height
  },
  getWidth: state => {
    return state.width
  },
  getTopOffset: state => {
    return state.offsetTop
  },
  getScrollStatus: state => {
    return state.scroll
  }
}

const state = new WindowProps()

export default {
  mutations,
  getters,
  state,
  actions
}
