<template>
  <div class="logo text-center flex items-center justify-center" :style="color ? color : this.styles[this.theme]">
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
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme']),
  },
  data() {
    let styles = {
      light: {
        color: 'black'
      },
      dark: {
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
p{
  display: block;
}
</style>
