<template>
  <header
    class="flex justify-center items-center full-width"
    :style="bgStyle"
  >
    <div class="limiter flex row reverse justify-between">
      <PhoneMenu/>
      <div class="nav_bar flex justify-between items-center" v-if="navButtons">
        <a class="user_name" href="#" v-if="isLoggedIn">UserName</a>
        <NavigationButtons v-else/>
      </div>
      <HeaderNavigation v-if="navigation"/>
      <Logo class="flex items-center" :theme="theme" v-if="logo">DAYS WITHOUT INCIDENTS</Logo>
    </div>
  </header>
</template>

<script>
import NavigationButtons from "components/OldComponents/NavigationButtons";
import Logo from "components/Core/Logo";
import HeaderNavigation from "components/OldComponents/HeaderNavigation";
import {mapGetters, mapMutations} from "vuex";
import PhoneMenu from "components/OldComponents/PhoneMenu";

export default {
  name: "Header",
  components: {
    Logo,
    NavigationButtons,
    HeaderNavigation,
    PhoneMenu,
  },
  props: {
    color: {
      type: String,
      default: 'light',
    },
    bg: {
      type: Boolean,
      default: false,
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

  },
  data() {
    let colors
    let bgStyle
    if (this.color === 'light') {
      if (this.bg) {
        bgStyle = {
          'background-color': 'rgba(241, 242, 244, 0.8)',
          'background-filter': 'blur(4px)',
        }
      }
    }
    return {
      isLoggedIn: false,
      colors: colors,
      bgStyle: bgStyle,
    }
  },
  methods: {
    ...mapMutations('HeaderStore', ['changeTheme'])
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme'])
  },
  watch: {
    color() {
      this.changeTheme(this.color)
    }
  }
}
</script>

<style lang="scss">
header {
  height: $header-height;
  //backdrop-filter: blur(4px);
  position: sticky;
  top: 0;
  z-index: 10000;
  color: $oB;

  .nav_bar {
    font-size: 18px;
    justify-self: start;
    //margin:auto;
  }
}
@media (min-width: 768px){
  .menu-burger-btn{
    display: none !important;
  }
}
@media (max-width: 768px){
  .nav_bar{
    display: none;
  }
  .header_navigation{
    display: none;
  }
  header{
    background-color: white;
  }
  .logo{
    line-height: 40px;
  }
}
</style>
