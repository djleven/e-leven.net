<template>
  <section-component
    sectionId="contact "
    heading="true"
    height="0.75"
    title="get in touch"
    class="contact">

    <template v-slot:content>
      <div class="container"  :style="fromTop">
        <div class="half lefty">
          <div class="box">
            Montréal <img :src="imagePath('qu.png')" />
            <br>
            <phone>(+1)514-360-6149</phone>
          </div>
          <div class="box">
            Toronto <img :src="imagePath('ca.png')" />
            <br>
            <phone>(+1)555-360-6149</phone>
          </div>
        </div>

        <div class="half">
          <div class="box">
            <img :src="imagePath('gr.png')" /> Athens
            <br>
            <phone>(+30)210-300-6149</phone>
          </div>
          <div class="box">
            <img :src="imagePath('us.png')" /> Miami
            <br>
            <phone>(+1)304-560-6149</phone>
          </div>
        </div>


        <div class="centered bottom-pad">
          <!--<h5>Web
          </h5>-->

          <!--<h5>Email
          </h5>-->
          <a class="email" href="mailto:#">info@e-leven.net
          </a>
          <div class="social">
            <ul class="eleven-social">
              <li class="social-linkedin">
                <a href="https://www.linkedin.com/in/stathakos" target="_blank">
                  <i class="fab fa-linkedin">
                  </i>
                </a>
              </li>
              <li class="social-github">
                <a href="https://github.com/djleven" target="_blank">
                  <i class="fab fa-github">
                  </i>
                </a>
              </li>
              <li class="social-twitter">
                <a href="https://twitter.com/djleven" target="_blank">
                  <i class="fab fa-twitter">
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </template>
  </section-component>
</template>

<script>
import SectionComponent from '@/components/Section.vue'

export default {
  components: { SectionComponent },
  computed: {
    fromTop () {
      return `margin-top:${this.$store.getters.getHeight / 3}px`
    }
  },
  methods: {
    imagePath (file) {
      return require('../assets/' + file)
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    /*font-family: 'Kaushan Script', cursive;*/
    font-style: normal;
  }
  .half {
    width:50%;
    float:left;
    padding: 0 5px;
  }
  .lefty {
    text-align: right;
  }

  li{
    display: inline-block;
  }

  a{
    display: block;
    width: 40px;
    line-height: 40px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    -webkit-transition: background .3s ease-in-out;
    transition: background .3s ease-in-out;
    &.email {
      width: unset;
      color: #666;
      &:hover {
        color: #000;
      }
    }
  }
  .social-facebook a{background: #3873ae;}
  .social-linkedin a{background: #006fa6;}
  .social-twitter a{background: #62c6f8;}
  .social-google a, .social-github a{background: #000;}

  .social-facebook a:hover, .social-linkedin a:hover{background: #4893ce;}
  .social-twitter a:hover{background: #82e6ff;}
  .social-google a:hover, .social-github a:hover{background: #333;}
  .box img {
    display:none;
  }
</style>
