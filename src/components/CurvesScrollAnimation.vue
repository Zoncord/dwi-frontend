<template>
  <div class="curves">
    <div class="curves-wrapper">
      <img class="curve l_curve top_curve" src="../assets/images/SVG/curves1.svg"
           alt="curves">
      <img class="curve md_curve top_curve" src="../assets/images/SVG/curves2.svg"
           alt="curves">
      <img class="curve sm_curve top_curve" src="../assets/images/SVG/curves3.svg"
           alt="curves">

      <img class="curve l_curve bottom_curve" src="../assets/images/SVG/curves1.svg"
           alt="curves">
      <img class="curve md_curve bottom_curve" src="../assets/images/SVG/curves2.svg"
           alt="curves">
      <img class="curve sm_curve bottom_curve" src="../assets/images/SVG/curves3.svg"
           alt="curves">
    </div>
    <div class="full-height full-width">
      <slot/>
    </div>
  </div>
</template>

<script>

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {
  name: "CurvesScrollAnimation",
  data() {
    return {
      l_width: 30
    }
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 1024px){
  .curves-wrapper{
    display: none;
  }
}
.curves {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.curve {
  position: absolute;
  transition: 1s ease-out;
  -moz-transition: 1s ease-out;
  -o-transition: 1s ease-out;
  -webkit-transition: 1s ease-out;
}
.top_curve{
  top: 0;
  left: 0;
  transform: rotate(180deg);
}
.bottom_curve{
  bottom: 0;
  right: 0;

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
  z-index: 10000000;
}

.md_curve {
  width: 22vw;
  z-index: 10000001;
}

.sm_curve {
  width: 16vw;
  z-index: 10000002;
}
</style>
