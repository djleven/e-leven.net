<template>
  <section-component
    sectionId="intro"
    :height="1"
    class="intro">

    <template v-slot:content>
      <div class="heading centered" :style="fromTop">
        <h2>e-leven.net</h2>
        <h4 class="upper">Creative web development</h4>

        <div class="page-scroll">
          <transition name="bounce" mode="out-in">
            <a v-if="!loading" class="btn btn-circle" @click="scrollDown">
              <i class="fa fa-angle-double-down animated">
              </i>
            </a>
          </transition>
        </div>

      </div>
    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'
import { SECTION_CLASSES } from '../utils/constants'

export default {
  components: { SectionComponent },
  data () {
    return {
      link: SECTION_CLASSES.intro
    }
  },
  computed: {
    fromTop () {
      return `top:${this.$store.getters.getHeight / 3}px`
    },
    loading () {
      return this.$store.state.window.loading
    }
  },
  methods: {
    scrollDown () {
      window.scrollBy(0, 50)
    }
  }
}
</script>

<style scoped lang="scss">
  #intro.intro {
    width:100%;
    position:relative;
    background: url(../assets/images/bg/e-leven_bg.jpg) no-repeat top center;
    background-size: cover;

    .heading {
      text-align: center;
      font-family:'Kaushan Script', cursive;
    }
    .heading h2 {
      color: #FFF;
      font-size: 3.8rem;
      line-height: 3.8rem;
      font-weight: 700;
      background-color: rgba(0, 0, 0, 0);
      text-decoration: none;
      border-width: 0px;
      border-color: #000;
      border-style: none;
      text-shadow: -1px 0 1px #000;
      text-transform: lowercase;
    }
    .heading h4 {
      color: #fff;
      text-shadow: -1px 1px 1px #000;
    }
  }
</style>
