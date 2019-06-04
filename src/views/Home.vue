<template>
  <Jadzia
    :pageClass="data.class"
    :menuItems="menuItems">
    <template v-slot:leading>
      <Intro/>
    </template>
    <template v-slot:content>
      <works
        v-for="(work, index) in data.works"
        :section="work"
        :key="index"
        :class="data.class">
      </works>
    </template>
    <template v-slot:trailing>
      <Contact/>
      <footer-component/>
    </template>
  </Jadzia>
</template>

<script>
import Jadzia from '@/layouts/Jadzia.vue'
import Intro from '@/components/Intro.vue'
import Works from '@/components/Works.vue'
import Contact from '@/components/Contact.vue'
import FooterComponent from '@/components/Footer.vue'
import { SECTION_CLASSES } from '../utils/constants'

export default {
  components: { Jadzia, Intro, Contact, Works, FooterComponent },
  mounted () {
    this.$store.commit('setScrollItems', Array.from(this.itemData, x => x.name))
  },
  computed: {
    menuItems () {
      return [
        {
          name: 'Home',
          url: SECTION_CLASSES.intro,
          sectionNumber: [0]
        },
        {
          name: 'Work',
          url: SECTION_CLASSES.work,
          sectionNumber:
              Array.from(this.itemData, x => this.itemData.indexOf(x) + 1)
        },
        {
          name: 'About',
          url: '/about',
          sectionNumber: []
        },
        {
          name: 'Contact',
          url: SECTION_CLASSES.contact,
          sectionNumber: [(this.itemData.length + 1)]
        }
      ]
    },
    data () {
      return this.$store.state.works
    },
    itemData () {
      return this.data.works
    }
  }
}
</script>
