<template>
  <section-component
    sectionId="footer"
    height="0.2"
    class="footer">

    <template v-slot:content>
      <footer>
        <div class="container">
          <div class="page-scroll hidden-xsh">
            <a class="btn btn-circle" @click="scrollToTop">
              <i class="fa fa-angle-double-up animated">
              </i>
            </a>
          </div>
          <div class="copyright">
            © 2019 e-leven.net
          </div>
        </div>
      </footer>
    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'

export default {
  components: { SectionComponent },
  methods: {
    scrollToTop () {
      this.$store.dispatch('scrollPageToFromClick', 0)
    }
  }
}
</script>

<style scoped lang="scss">
  footer {
    background-color: #193960;
    text-align: center;
    height:100%;
    display: table;
    width: 100%;
    color: white;
    .container {
      display: table-cell;
      vertical-align: middle;
      text-align:center;
    }
  }

</style>
