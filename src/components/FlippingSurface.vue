<template>
  <div
    class="flipping_surface"
    :style="{
          transform: this.transform,
    }"
    @click="flip"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "FlippingSurface",
  data() {
    return {
      // transform: 'none',
      xAxis: 0,
      yAxis: 0,
    }
  },
  methods: {
    flip() {
      this.xAxis = (this.xAxis + 180) % 360
    }
  },
  computed: {
    transform(){
      return `perspective(500px) rotateY(${this.xAxis}deg) rotateX(${this.yAxis}deg)`
    }
  }
}
</script>

<style lang="scss">
.flipping_surface{
  //width: max-content;
  transition: 1s;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}
.front_side{
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.back_side{
  position: absolute;
  top: 0;
  width: 100% !important;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

</style>
