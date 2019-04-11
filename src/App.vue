<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import 'min/entireframework.min.css'
import './assets/styles/style.css'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.$store.commit('heightResize', window.innerHeight)
      this.$store.commit('widthResize', window.innerWidth)
    }
  }
}
</script>
