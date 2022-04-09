<template>

  <a v-if="link" href="/" class="logo text-center flex items-center justify-center"
     :style="color ?  this.styles[this.color] : null">
    <slot/>
  </a>
  <div v-else class="logo text-center flex items-center justify-center"
       :style="color ?  this.styles[this.color] : null">
    <slot/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Logo",
  props: {
    color: {
      default: null,
    },
    link: {
      default: false,
    }
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme']),
  },
  data() {
    // TODO переделать styles на нормальные названия
    let styles = {
      light: {
        color: 'black'
      },
      dark: {
        color: '#9DACFFFF',
      },
      purple: {
        color: '#9DACFFFF',
      }
    }
    return {
      styles
    }
  },

}
</script>

<style lang="scss" scoped>
.logo {
  font-family: Rounds, Roboto, sans-serif;
  font-weight: 700;
  font-size: calc(13px + 0.7vw);
  vertical-align: middle;
}

p {
  display: block;
}
</style>
