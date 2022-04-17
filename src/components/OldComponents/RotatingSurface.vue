<template>
  <div class="rotating_surface  flex justify-center items-center"
       @mouseenter="startRotation"
       @mousemove="rotate"
       @mouseleave="stopRotation"
       :ref="'rotating_surface_' + index"
  >
    <div class="rotating_content text-center"
         :style="{
            transform: this.transform,
            transition: this.transition,
         }"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RotatingSurface",
  props: {
    index: {
      type: Number,
      default: 0,
    }
  },
  data(){
    return{
      transform: 'none',
      transition: 'none',
      rect: null,
    }
  },
  methods: {
    startRotation(event) {
      this.rect = event.target.getBoundingClientRect()
      this.transition = 'none'
    },
    rotate(event) {
      if (this.rotateLock) {
        return
      }
      this.xAxis = (event.pageX - -window.pageXOffset - this.rect.x - this.rect.width / 2) / 15
      this.yAxis = (event.pageY - window.pageYOffset - this.rect.y - this.rect.height / 2) / 15
      if (this.isFlipped) {
        this.xAxis -= 180
        this.yAxis *= -1
      }
      this.transform = `perspective(500px) rotateY(${this.xAxis}deg) rotateX(${-this.yAxis}deg)`

    },
    stopRotation() {
      this.transition = 'all .8s ease'
      this.transform = `perspective(500px) rotateY(0deg) rotateX(0deg)`
    }
  }
}
</script>

<style lang="scss" scoped>
.rotating_surface{
  //width: max-content;
  flex-grow: 1;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
}
.rotating_content{
  margin-top: 12.5%;
  margin-bottom: 12.5%;
  width: 85%;
  //width: max-content;
  //padding-left: 10%;
  //padding-right: 10%;
  *{

  }
}
</style>
