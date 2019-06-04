<template>
  <section-component
    :sectionId="section.name"
    :class="section.name"
    :heading="true"
    :height="1"
    :width="1"
    :bg="section.background"
    :color="section.color"
    :title="section.title"
    class="work">
    <template v-slot:content>
      <div class="centered">
        <figure>
          <a :href="`https://${section.url}`" target="_blank">
            <img :src="imagePath(section.img)"/>
          </a>
        </figure>
        <span class="subtitle" ref="subtitle">{{section.subtitle}}</span>
        <p>{{section.location}}</p>
      </div>
    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'

export default {
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: { SectionComponent },
  methods: {
    imagePath (file) {
      return require('../assets/images/logos/' + file)
    }
  }
}
</script>

<style scoped lang="scss">
  .work {
    background: yellow;
  }
  figure {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  @media (max-height: 499px) {
    figure img {
      max-height: 155px;
    }
  }
  @media (max-height: 399px) {
    figure img {
      max-height: 100px;
    }
  }
</style>
