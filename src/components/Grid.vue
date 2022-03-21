<template>
  <q-btn class="grid-container-control" @click="toggleGrid()"/>
  <div class="grid-container limiter"
       :style="{
          'grid-template-columns': `repeat(${this.gridCount}, auto)`,
          display: this.isShowed? 'grid' : 'none',
       }">
    <div class="grid-column" v-for="grid in gridCount" :key="grid"/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {ref} from 'vue'
import GridStore from "src/store/GridStore";

export default {
  name: "Grid",
  props: {
    startGridCount: {
      default: 12,
    }
  },
  data() {
    return {
      // isShowed: true,
      // gridCount: this.startGridCount,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    ...mapGetters('GridStore', ['isShowed']),
    gridCount() {
      if (this.windowWidth > 768) {
        return 12
      } else if (480 < this.windowWidth && this.windowWidth < 768) {
        return 8
      }
      return 4
    },
  },
  methods: {
    ...mapMutations('GridStore', ['toggleGrid'])
  }
}
</script>

<style lang="scss" scoped>
.grid-container-control {
  width: 10px;
  height: 10px;
  position: fixed;
  top: 0;
  left: 0;
  //background-color: #21BA45;
  z-index: 110000000;
  opacity: 0;
}

.grid-container {
  max-width: $limiter-max-width;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  grid-column-gap: 16px;
  display: grid;
  z-index: 100000000;
  opacity: .5;
}

.grid-column {
  height: 100%;
  background-color: red;
  margin-bottom: 10px;
}
</style>
