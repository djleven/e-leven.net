<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import store from './store'

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
      store.commit('heightResize', window.innerHeight)
      store.commit('widthResize', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">

/* latin-ext */
@font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  src: local('Kaushan Script'), local('KaushanScript-Regular'), url(./assets/fonts/KaushanScript_ext.woff2) format('woff2');
  unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Kaushan Script';
  font-style: normal;
  font-weight: 400;
  src: local('Kaushan Script'), local('KaushanScript-Regular'), url(./assets/fonts/KaushanScript.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin */
@font-face {
  font-family: 'Stardos Stencil';
  font-style: normal;
  font-weight: 400;
  src: local('Stardos Stencil Regular'), local('StardosStencil-Regular'), url(./assets/fonts/Stardos.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}
/* latin */
@font-face {
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  src: local('Oswald Regular'), local('Oswald-Regular'), url(./assets/fonts/Oswald-Regular.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin:0
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Oswald';
  font-weight: 300;
  color: #666;
  background-color: #fff;
  overflow-x: hidden;
}

html {
  width: 100%;
  height: 100%;
}

h1,
h2,
h4 {
  margin: 0 0 30px;
  font-family:'Kaushan Script', cursive;
  font-weight: 700;
  letter-spacing: 1px;
}
.upper {
  text-transform: uppercase;
}
p {
  margin: 0 0 20px;
  font-size: 16px;
  line-height: 1.6em;
}

a {
  color: #28c3ab;
  -webkit-transition: all .2s ease-in-out;
  -moz-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
}
a:hover,
a:focus {
  text-decoration: none;
  color: #176e61;
  outline:none;
}

.btn:hover, .btn:focus {
  outline: none;
}

.centered {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  float:left;
}

.Grid            { display: flex; flex-wrap: wrap; }
.Grid.\-top      { align-items: flex-start; }
.Grid.\-middle   { align-items: center; }
.Grid.\-bottom   { align-items: flex-end; }
.Grid.\-stretch  { align-items: stretch; }
.Grid.\-baseline { align-items: baseline; }
.Grid.\-left     { justify-content: flex-start; }
.Grid.\-center   { justify-content: center; }
.Grid.\-right    { justify-content: flex-end; }
.Grid.\-between  { justify-content: space-between; }
.Grid.\-around   { justify-content: space-around; }

.Cell            { box-sizing: border-box; flex-shrink: 0; }
.Cell.\-fill     { width: 0; min-width: 0; flex-grow: 1; }
.Cell.\-1of12    { width: calc(100% * 1 / 12); }
.Cell.\-2of12    { width: calc(100% * 2 / 12); }
.Cell.\-3of12    { width: calc(100% * 3 / 12); }
.Cell.\-4of12    { width: calc(100% * 4 / 12); }
.Cell.\-5of12    { width: calc(100% * 5 / 12); }
.Cell.\-6of12    { width: calc(100% * 6 / 12); }
.Cell.\-7of12    { width: calc(100% * 7 / 12); }
.Cell.\-8of12    { width: calc(100% * 8 / 12); }
.Cell.\-9of12    { width: calc(100% * 9 / 12); }
.Cell.\-10of12   { width: calc(100% * 10 / 12); }
.Cell.\-11of12   { width: calc(100% * 11 / 12); }
.Cell.\-12of12   { width: 100%; }
</style>
