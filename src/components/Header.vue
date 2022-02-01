<template>
  <header
    class="flex justify-center items-center full-width"
    :style="colors[colorScheme]"
  >
    <div class="limiter flex justify-between">
      <Logo class="flex items-center" v-if="logo">DAYS WITHOUT INCIDENTS</Logo>
      <HeaderNavigation v-if="navigation"/>

      <div class="nav_bar flex justify-between items-center" v-if="navButtons">
        <a class="user_name" href="#" v-if="isLoggedIn">UserName</a>
        <HeaderNavButtons v-else/>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavButtons from "components/HeaderNavButtons";
import Logo from "components/Logo";
import HeaderNavigation from "components/HeaderNavigation";

export default {
  name: "Header",
  components: {
    Logo,
    HeaderNavButtons,
    HeaderNavigation,
  },
  props: {
    colorScheme: {
      type: String,
      default: 'light'
    },
    logo: {
      type: Boolean,
      default: false,
    },
    navButtons: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    limited: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    let colors
    if (this.light) {
      colors = {
        // 'background-color': 'rgba()'
      }
    }
    return {
      isLoggedIn: false,
      colors: {
        light: {
          'background-color': 'rgba(241, 242, 244, 0.8)',
          'background-filter': 'blur(4px)',
        },
        dark: {
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: $header-height;
  //backdrop-filter: blur(4px);
  position: sticky;
  top: 0;
  z-index: 10000;

  .nav_bar {
    font-size: 18px;
    justify-self: start;
    //margin:auto;
  }
}
</style>
