<template>
  <div class="home">
    <MainNavigation/>
    <Intro/>
    <Work/>
    <Contact/>
    <footer-component/>
  </div>
</template>

<script>
import MainNavigation from '@/components/TopNavbar.vue'
import Intro from '@/components/Intro.vue'
import Work from '@/components/Work.vue'
import Contact from '@/components/Contact.vue'
import FooterComponent from '@/components/Footer.vue'

export default {
  components: { MainNavigation, Intro, Work, Contact, FooterComponent },
  computed: {
    height () {
      return this.$store.getters.getHeight
    },
    width () {
      return this.$store.getters.getWidth
    }
  }
}
</script>

<style lang="scss">
  .page-scroll {
    text-align: center;
  }
  .btn-circle {
    width: 70px;
    height: 70px;
    margin-top: 15px;
    padding: 11px 20px;
    border: 2px solid #fff;
    border-radius: 50%;
    font-size: 20px;
    color: #fff;
    background: 0 0;
    -webkit-transition: background .3s ease-in-out;
    -moz-transition: background .3s ease-in-out;
    transition: background .3s ease-in-out;
  }
  .btn-circle:hover,
  .btn-circle:focus {
    outline: 0;
    color: #fff;
    background: rgba(255,255,255,.1);
  }
  .centered {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
