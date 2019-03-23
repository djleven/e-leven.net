<template>
  <carousel-3d
    class="no-shadow ex--center-mode"
  >
    <slide
      v-for="(work, index) in works"
      :key="index"
      :perspective="180" :controls-visible="true" :width="600" :display="1"
      :clickable="true"
      :index="index"
    @click="openItem(index)">

      <figure>
        <img :src="imagePath(work.img)" />
        <figcaption>
          <a href="http://e-leven.net">
          <span>{{work.title}}</span>
          <span class="subtitle" ref="subtitle">{{work.subtitle}}</span>
          <span>{{work.localtion}}</span>
          </a>
        </figcaption>
      </figure>
    </slide>
  </carousel-3d>
        <!-- /slider-->

        <!--<transition name=slide-fade">-->
        <!--<section class="content" v-show="showContent">-->
            <!--<div v-for="(work, index) in siteData.works"-->
                 <!--:key="index"-->
                 <!--v-show="currentContent === index"-->
                 <!--:class="{'content__item':true, 'content__item&#45;&#45;current':(dataContent + index === isCurrent)}" >-->
                <!--<div class="content__item-inner">-->
                    <!--<img class="content__item-img" :src="imagePath(work.img)" :alt="index" />-->
                <!--</div>-->
                <!--<div class="content__item-inner">-->
                    <!--&lt;!&ndash;<?php include __DIR__ . '/assets/parts/dr.php'; ?>&ndash;&gt;-->
                    <!--<p><a href="http://dearride.com/">Visit {{work.title}} &xrarr;</a></p>-->
                <!--</div>-->
            <!--</div>-->
            <!--<button v-on:click="closeItem" class="btn btn-circle small button&#45;&#45;close"><i class="fa fa-close icon&#45;&#45;circle-cross"></i></button>-->
        <!--</section>-->
        <!--</transition>-->

</template>

<style scoped lang="scss">
  .carousel-3d-container {

    figure {
      display: block;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
    figcaption {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      position: absolute;
      bottom: 0;
      padding: 15px;
      font-size: 12px;
      min-width: 100%;
      box-sizing: border-box;
      text-align: center;
    }
    .carousel-3d-slide {
      background:white;
      position: absolute;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      top: 0;
      border-radius: 1px;
      border-color: #000;
      border-color: rgba(0, 0, 0, 0.4);
      border-style: solid;
      background-size: cover;
      display: block;
      margin: 0;
      box-sizing: border-box;
      img {
        width: 50%;
      }
    }
  }
</style>

<script>

import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  props: {
    siteData: Object
  },
  components: {
    Carousel3d,
    Slide
  },
  data () {
    return {
      openContent: false,
      lockScroll: false,
      isCurrent: '0',
      works: this.siteData.works
    }
  },
  methods: {
    imagePath (file) {
      return require('../assets/images/logos/' + file)
    },
    imagePath1 (file) {
      return 'background-image:' + require('../assets/images/logos/' + file)
    },
    openItem (index) {
      console.log('opensesame' + index)
    }
  }
}

</script>
