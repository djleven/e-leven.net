<template>
  <Jadzia
    :pageClass="data.class"
    :menuItems="menuItems">
    <template v-slot:leading>
      <Intro/>
    </template>
    <template v-slot:content>
      <about-me
        v-for="(work, index) in itemData"
        :section="work"
        :key="index"
        :class="data.class">
      </about-me>
    </template>
    <template v-slot:trailing>
      <Contact/>
      <footer-component/>
    </template>
  </Jadzia>
</template>

<script>
import Jadzia from '@/layouts/Jadzia.vue'
import Intro from '@/components/AboutLead.vue'
import AboutMe from '@/components/AboutContent.vue'
import Contact from '@/components/Contact.vue'
import FooterComponent from '@/components/Footer.vue'
import { SECTION_CLASSES } from '../utils/constants'

export default {
  components: { Jadzia, Intro, Contact, AboutMe, FooterComponent },
  mounted () {
    this.$store.commit('setScrollItems', Array.from(this.itemData, x => x.name))
  },
  computed: {
    menuItems () {
      return [
        {
          name: 'Home',
          url: '/',
          sectionNumber: []
        },
        {
          name: 'Work',
          url: '/',
          sectionNumber: []
        },
        {
          name: 'About',
          url: SECTION_CLASSES.about,
          sectionNumber: [0].concat(
            Array.from(this.itemData, x => this.itemData.indexOf(x) + 1)
          )
        },
        {
          name: 'Contact',
          url: SECTION_CLASSES.contact,
          sectionNumber: [(this.itemData.length + 1)]
        }
      ]
    },
    data () {
      return this.$store.state.about
    },
    itemData () {
      return this.data.works
    }
  }
}
</script>
