<template>
  <div class="curves curves_top">
    <img class="curve l_curve" :style="{width: sizes.large + sizeType}" src="../assets/images/SVG/curves4.svg"
         alt="curves">
    <img class="curve md_curve" :style="{width: sizes.medium + sizeType}" src="../assets/images/SVG/curves5.svg"
         alt="curves">
    <img class="curve sm_curve" :style="{width: sizes.small + sizeType}" src="../assets/images/SVG/curves6.svg"
         alt="curves">
  </div>
  <div class="curves curves_bottom">
    <img class="curve l_curve" :style="{width: sizes.large + sizeType}" src="../assets/images/SVG/curves1.svg"
         alt="curves">
    <img class="curve md_curve" :style="{width: sizes.medium + sizeType}" src="../assets/images/SVG/curves2.svg"
         alt="curves">
    <img class="curve sm_curve" :style="{width: sizes.small + sizeType}" src="../assets/images/SVG/curves3.svg"
         alt="curves">
  </div>
</template>

<script>
export default {
  name: "CurvesScrollAnimation",
  props: {
    mouseScroll: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      sizeType: 'px',
      scroll: 0,
    }
  },
  mounted() {
    let page = document.getElementsByClassName('start')[0]
    if (page.addEventListener) {
      if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        page.addEventListener("wheel", this.onScroll);
      } else if ('onmousewheel' in document) {
        // устаревший вариант события
        page.addEventListener("mousewheel", this.onScroll);
      } else {
        // Firefox < 17
        page.addEventListener("MozMousePixelScroll", this.onScroll);
      }
    } else { // IE8-
      page.attachEvent("onmousewheel", this.onScroll);
    }

    // window.onscroll= function() {
    //   console.log('scrolling')
    // }
  },
  methods: {
    onScroll(e) {
      let delta = e.deltaY || e.detail || e.wheelDelta;
      if (this.scroll + delta > 0 && this.scroll + delta < 2000) {
        this.scroll += delta
      }
      // console.log(this.scale)
    }
  },
  computed: {
    defaultSizes(){
      return {
        small: window.innerWidth / 7.5,
        medium: window.innerWidth / 5.3,
        large: window.innerWidth / 3.7,
      }
    },
    scale() {
      if (this.scroll / 150 < 1) {
        return 1.2
      }
      return this.scroll / 150
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
  transition: 3s ease-out;
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
  //background-color: red;
  //opacity: .5;
}

</style>
