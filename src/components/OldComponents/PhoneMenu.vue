<template>
  <q-icon name="menu" class="menu-burger-btn" @click="toggleMenu()"/>
  <div class="phone-menu-wrapper" :style="{height: menuHeight + '%'}">
    <div class="phone-menu flex justify-center">
      <div class="limiter flex column justify-between">
        <div class="menu__header full-width flex justify-end items-center">
          <!--          <Logo color="#9DACFF">Days Without Incidents</Logo>-->
          <q-icon name="close" class="close-btn" @click="toggleMenu()"></q-icon>
        </div>
        <div class="menu-items flex justify-center items-center">
          <a
            v-for="(link, name) in this.navigation"
            :key="name"
            :href="link" class="menu-item"
          >
            {{ name }}
          </a>
        </div>
        <HeaderNavButtons :menu="{
        'signup': {
          background: '#9DACFF',
          width: '100%',
          color: 'white !important',
          'margin-bottom': '10px',
          height: '40px',
        },
        'login': {
          width: '100%',
          height: '40px',
        },
      }"/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "components/OldComponents/Logo";
import HeaderNavButtons from "components/OldComponents/NavigationButtons";
import {mapGetters} from "vuex";

export default {
  name: "PhoneMenu",
  components: {
    // Logo,
    HeaderNavButtons,
  },
  data() {
    return {
      showMenu: false,
      menuHeight: 0,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        this.menuHeight = 100
      } else {
        this.menuHeight = 0
      }
    }
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme', 'navigation'])
  },
}
</script>

<style lang="scss" scoped>
//.navigation-wrapper{
//  background-color: white;
//}
.q-icon {
  font-size: calc(30px + 1vw);
  color: $oB;
  position: relative;
  //top: 5vw;
  //right: 3vw;
  //bottom: 7.25vw;
  //left: 10.25vw;
}

.phone-menu-wrapper {
  transition: 1s;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  //height: 100vh;
}

.phone-menu {
  width: 100vw;
  height: 100vh;
  background-color: $oB;
  color: white;
  z-index: 100000000000;
}

.menu__header {
  height: $header-height;

  .q-icon {
    color: white;
  }
}

.menu-items {
  flex-grow: 1;
  flex-direction: column;
}

.menu-item {
  width: 100%;
  //height: 50px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  vertical-align: center;
  font-size: 25px;
  color: white;
  //line-height: 10px;

}
</style>
