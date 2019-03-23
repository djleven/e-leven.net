<template>
    <section
      :id="sectionId"
      :class="sectionClass"
      :style="heightStyle">

      <div v-if="heading" :class="headingClass">
        <div class="container centered">
          <div class="wow bounceInDown" :data-wow-delay="wowDelay">
            <div class="section-heading">
              <h2>{{ title }}
              </h2>
            </div>
          </div>
        </div>
      </div>

      <slot name="content"></slot>

    </section>
</template>

<script>
export default {
  props: {
    title: String,
    sectionId: {
      type: String,
      required: true
    },
    heading: {
      type: Boolean,
      default: false
    },
    sectionClass: {
      type: String,
      default: 'section'
    },
    wowDelay: {
      type: String,
      default: '0.4s'
    },
    height: {
      type: [ Number, String ],
      default: 0,
      validator: function (value) {
        return value >= 0 &&  value <= 1
      }
    }
  },
  data () {
    return {
      headingClass: `heading-${this.sectionId}`
    }
  },
  computed: {
    heightStyle () {
      if (this.height === 0) {
        return
      }
      let calcHeight = this.$store.getters.getHeight * this.height

      return `height:${calcHeight}px`
    }
  }
}
</script>
<style lang="scss">
  section{
    overflow:hidden;
    display: block;
  }
  h2{
    text-transform: uppercase;
    font-size: 40px;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .section-heading {
    padding-top: 10em;
  }
</style>
