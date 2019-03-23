<template>
  <section-component
    sectionId="work"
    heading="true"
    height="1"
    title="work"
    class="work">

    <template v-slot:content>
      <slider
        class="centered"
        :siteData="siteData"
      >
      </slider>
    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'
import Slider from '@/components/Slider.vue'
import siteData from '../data/works.json'

export default {
  components: { SectionComponent, Slider },
  data () {
    return {
      siteData: siteData
    }
  }
}
</script>

<style scoped lang="scss">
.work {
  background: yellow;
}
</style>
