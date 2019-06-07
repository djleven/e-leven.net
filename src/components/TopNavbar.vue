<template>
  <nav class="navbar navbar-custom navbar-fixed-top" ref="navbar">
    <span class="navbar-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </span>
    <a class="navbar-brand" href="https://e-leven.net">
      <h1>e-leven.net</h1>
    </a>

    <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
      <transition name="bounce" mode="out-in">
        <ul v-if="!loading" class="main-nav" ref="navBarToggle">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :class="menuItemClass(index)"
            @click="goTo(index)">
            <a class="nav-links">
              {{ menuItem.name }}
            </a>
          </li>
        </ul>
      </transition>
    </div>

  </nav>
</template>

<script>

export default {
  name: 'MainNavigation',
  props: {
    menuItems: {
      type: Array,
      required: true
    }
  },
  beforeMount () {
    this.$store.commit('setLoading', true)
  },
  computed: {
    topOffset () {
      return this.$store.getters.getTopOffset
    },
    active () {
      return this.$store.state.window.scroll.active
    },
    loading () {
      return this.$store.state.window.loading
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
      if (this.menuItems[index].sectionNumber.includes(this.active)) {
        return 'active'
      }
    },
    toggleMenu () {
      let navBarToggle = this.$refs.navBarToggle
      navBarToggle.classList.toggle('active')
    },
    async goTo (index) {
      const to = this.menuItems[index].url
      if (this.$store.state.window.scroll.scrollStarted) {
        setTimeout(() => this.goTo(index), 500)
      } else {
        if (this.menuItems[index].sectionNumber.length) {
          this.$store.dispatch('scrollPageToFromClick', to)
        } else {
          this.$router.push({ path: to })
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
    margin:0;
    li {
      text-align: left;
      margin:0;
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
      font-size: 23px;
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

  /* Maximum height */
  @media (max-height: 399px) {
    .navbar.top-nav-collapse {
      background: transparent!important;
    }
    .navbar-main-collapse {
      background: #E8820C;
    }
    .navbar-brand, footer .btn-circle {
      display:none;
    }
    .navbar-toggle {
      color: #E8820C!important;
    }
    body {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 767px), screen and (max-height: 398px)  {
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
          color: white;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (min-height: 399px) {
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
