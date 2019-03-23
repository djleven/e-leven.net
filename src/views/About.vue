<template>
  <slider
        :siteData="siteData"
      >
      </slider>
</template>

<script>
import siteData from '../data/works.json'
import Slider from '../components/Slider.vue'

export default {
  name: 'HelloWorld',
  components: { Slider },
  data () {
    return {
      siteData: siteData
    }
  }
}
</script>
