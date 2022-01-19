<template>
  <div class="curves_top">
    <img class="curve l_curve" :style="{width: sizes.large + 'px'}" src="../assets/images/SVG/curves1.svg"
         alt="curves">
    <img class="curve md_curve" :style="{width: sizes.medium + 'px'}" src="../assets/images/SVG/curves2.svg"
         alt="curves">
    <img class="curve sm_curve" :style="{width: sizes.small + 'px'}" src="../assets/images/SVG/curves3.svg"
         alt="curves">
  </div>
  <div class="curves_bottom">
    <img class="curve l_curve" :style="{width: sizes.large + 'px'}" src="../assets/images/SVG/curves1.svg"
         alt="curves">
    <img class="curve md_curve" :style="{width: sizes.medium + 'px'}" src="../assets/images/SVG/curves2.svg"
         alt="curves">
    <img class="curve sm_curve" :style="{width: sizes.small + 'px'}" src="../assets/images/SVG/curves3.svg"
         alt="curves">
  </div>
</template>

<script>
// import {map}
export default {
  name: "CurvesScrollAnimation",
  computed: {
    defaultSizes(){
      return {
        small: window.innerWidth / 7.5,
        medium: window.innerWidth / 5.3,
        large: window.innerWidth / 3.7,
      }
    },
    scale() {
      if (this.$store.getters["mainPageStore/scroll"] / 150 < 1) {
        return 1.2
      }
      return this.$store.getters["mainPageStore/scroll"] / 150
    },
    sizes() {
      return {
        small: this.defaultSizes.small * this.scale,
        medium: this.defaultSizes.medium * this.scale,
        large: this.defaultSizes.large * this.scale,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.curve {
  position: absolute;
  transition: 1s ease-out;
  -moz-transition: 1s ease-out;
  -o-transition: 1s ease-out;
  -webkit-transition: 1s ease-out;
}

.curves_top {
  overflow: hidden;
}

.curves_top {
  * {
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }
}

.curves_bottom {
  * {
    bottom: 0;
    right: 0;
  }
}

.l_curve {
  width: 30vw;
  z-index: 100;
}

.md_curve {
  width: 22vw;
  z-index: 200;
}

.sm_curve {
  width: 16vw;
  z-index: 300;
}
</style>
