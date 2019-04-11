<template>
    <section
      :id="sectionId"
      :class="sectionClass"
      :style="sectionStyle">

      <div v-if="heading" :class="headingClass">
        <div class="centered">
          <div class="section-heading">
            <h2>
              {{ title }}
            </h2>
          </div>
        </div>
      </div>

      <slot name="content"></slot>
      <div style="clear:both"></div>
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
    bg: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    heading: {
      type: Boolean,
      default: false
    },
    sectionClass: {
      type: String,
      default: 'section center'
    },
    height: {
      type: [ Number, String ],
      default: 0,
      validator: function (value) {
        return value >= 0 &&  value <= 1
      }
    },
    width: {
      type: [ Number, String ],
      default: 0,
      validator: function (value) {
        return value >= 0 && value <= 1
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
        return ''
      }
      let calcHeight = this.$store.getters.getHeight * this.height

      return this.styleUnitFactory('height', calcHeight)
    },
    widthStyle () {
      if (this.width === 0) {
        return ''
      }
      let calcWidth = this.$store.getters.getWidth * this.width

      return this.styleUnitFactory('width', calcWidth)
    },
    bgStyle () {
      if (this.bg) {
        return this.styleUnitFactory('background', this.bg, '')
      }
      return ''
    },
    colorStyle () {
      if (this.color) {
        return this.styleUnitFactory('color', this.color, '')
      }
      return ''
    },
    sectionStyle () {
      return `
      ${this.heightStyle}
      ${this.widthStyle}
      ${this.bgStyle}
      ${this.colorStyle}`
    }
  },
  methods: {
    styleUnitFactory (parameter, value, suffix = 'px') {
      return ` ${parameter}:${value}${suffix};`
    }
  }
}
</script>
<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    resize: vertical;
    overflow: auto;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
</style>
