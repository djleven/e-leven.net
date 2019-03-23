<template>
  <section-component
    sectionId="footer"
    height="0.25"
    class="footer">

    <template v-slot:content>
      <footer>
        <div class="container">
          <div class="wow shake" data-wow-delay="0.4s">
            <div class="page-scroll">
              <a href="#intro" class="totop btn btn-circle">
                <i class="fa fa-angle-double-up animated">
                </i>
              </a>
            </div>
          </div>
          <p class="copyright">
            © 2019 e-leven.net
          </p>
        </div>
      </footer>
    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'

export default {
  components: { SectionComponent }
}
</script>

<style scoped lang="scss">
  footer {
    background-color: #193960;
    text-align: center;
    padding: 20px 0;
    height:100%;
    p {
      margin: 20px;
      color: white;
    }
  }
  .page-scroll {
    padding-top: 3em;
  }
</style>
