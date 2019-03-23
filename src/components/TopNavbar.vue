<template>
  <nav class="navbar navbar-custom navbar-fixed-top" ref="navbar">
    <span class="navbar-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </span>
    <a class="navbar-brand" href="https://e-leven.net">
      <h1>e-leven.net</h1>
    </a>
    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
      <ul class="main-nav" ref="navBarToggle">
        <li
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :class="menuItemClass(index)"
          @click="setActive(index)">
          <a :href="menuItem.url" class="nav-links">
            {{ menuItem.name }}
          </a>
        </li>
      </ul>
    </div>
    <!--<router-link to="/">Home</router-link> |-->
    <!--<router-link to="/about">About</router-link>-->
  </nav>
</template>

<script>
import store from '../store'

export default {
  name: 'MainNavigation',
  data () {
    return {
      active: 0,
      menuItems: [
        {
          name: 'Home',
          url: '#intro'
        },
        {
          name: 'Work',
          url: '#work'
        },
        {
          name: 'About',
          url: '#about'
        },
        {
          name: 'Contact',
          url: '#contact'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    topOffset() {
      return this.$store.getters.getTopOffset
    }
  },
  watch: {
    topOffset (newVal, oldVal) {
      if ((newVal > 50 && oldVal <= 50) ||
        (newVal <= 50 && oldVal > 50)) {
        this.$refs.navbar.classList.toggle('top-nav-collapse')
      }
    }
  },
  methods: {
    menuItemClass (index) {
      if (index === this.active) {
        return 'menuItem active'
      }
      return 'menuItem'
    },
    setActive (index) {
      this.active = index
    },
    toggleMenu () {
      let navBarToggle = this.$refs.navBarToggle
      navBarToggle.classList.toggle('active')
    },
    handleScroll () {
      let element = this.$refs.navbar
      let bodyRect = document.body.getBoundingClientRect()
      let elemRect = element.getBoundingClientRect()
      let offset = elemRect.top - bodyRect.top
      store.commit('setTopOffset', offset)
    }
  }
}
</script>

<style lang="scss">
  //$menu-background: linear-gradient(262deg, #E8820C 41%, #A8420A 100%);
  $menu-background: #E8820C;

  .navbar {
    display: block;
    font-size: 18px;
    position: fixed;
    right: 0;
    left: 0;
    background: 0 0;
    padding: 0;
    z-index: 1030;
    top: 0;
    -webkit-transition: all .5s ease-in-out,padding .5s ease-in-out;
    -moz-transition: all .5s ease-in-out,padding .5s ease-in-out;
    transition: all .5s ease-in-out,padding .5s ease-in-out;
    &.top-nav-collapse {
      /*background: #E8820C;*/
      background: $menu-background;
      ul.main-nav li a {
        color: #fff;
      }
    }
  }

  .main-nav {
    list-style-type: none;
    display: none;
    background-color: rgba(255,255,255,.4);
    li {
      text-align: left;
    }
    li a {
      font-size: 0.85em;
      letter-spacing: 0.1em;
      color: #444;
      text-transform: uppercase;
      font-weight: 700;
      padding: 5px;
      line-height: 64px;
    }
    li.active, li:hover {
      outline: 0;
      background-color: rgba(255,255,255,.2);
    }
  }

  .nav-links,
  .navbar-brand {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
  }

  .navbar-brand {
    float: left;
    font-size: 0.8em;
    padding: 1em 2em;
    h1{
      margin:0;
    }
  }

  .navbar-toggle {
    position: absolute;
    top: 1em;
    right: 1em;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1em;
  }

  .active {
    display: block;
  }

  @media screen and (max-width: 767px) {
    .collapse.navbar-collapse {
      clear: both;
    }
    .main-nav {
      li {
        padding: 0 24px;

        a {
          padding: unset;
          display: inline-block;
          width:100%;
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .navbar {
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
      letter-spacing: 1px;
      background: 0 0;
      border-radius: 0;
      -webkit-transition: all .5s ease-in-out,padding .5s ease-in-out;
      -moz-transition: all .5s ease-in-out,padding .5s ease-in-out;
      transition: all .5s ease-in-out,padding .5s ease-in-out;

      &.top-nav-collapse {
        padding: 0;
        background: $menu-background;
        .main-nav {
          background-color: rgba(0,0,0,0);
          li a:hover {
            background-color: rgba(255,255,255,.2);
          }
        }
      }
      .navbar-collapse {
        margin-right: 0;
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;
        width: auto;
        border-top: 0;
        box-shadow: none;
        max-height: 340px;
        &.collapse {
          display: block !important;
          height: auto !important;
          padding-bottom: 0;
          overflow: visible !important;
        }
      }

      .navbar-right {
        float: right!important;
      }
      .main-nav {
        display: flex;
        margin-right: 30px;
        flex-direction: row;
        justify-content: flex-end;

        li {

        }
        .navbar-custom.top-nav-collapse .nav.navbar-nav {
          background-color: rgba(0,0,0,0);
        }
      }

      .nav-links {
        padding: 20px;
      }

      .navbar-toggle {
        display: none;
      }

      .navbar-brand:hover,
      .nav-links:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
</style>
