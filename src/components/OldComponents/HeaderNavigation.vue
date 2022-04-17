<template>
  <div class="header_navigation flex justify-center items-center">
    <a v-for="(link, name) in this.navigation" :key="name" :href="link" :style="styles[this.theme]">{{ name }}</a>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderNavigation",
  computed: {
    ...mapGetters('HeaderStore', ['theme', 'navigation'])
  },
  data(){
    return {
      styles: {
        dark: {
          color: 'white',
        }
      },

    }
  }
}
</script>

<style lang="scss" scoped>
.header_navigation {
  flex-grow: 2;

  a {
    transition: 1s;
    //color: $oB;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>
