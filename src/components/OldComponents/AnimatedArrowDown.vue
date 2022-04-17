<template>
  <div class="animated_arrow_down flex column items-center">
<!--    <div class="vertical flex column">-->
<!--      <img src="../assets/images/SVG/arrowPart.svg" alt="arrow part">-->
<!--      <img src="../assets/images/SVG/arrowPart.svg" alt="arrow part">-->
<!--      <img src="../assets/images/SVG/arrowPart.svg" alt="arrow part">-->
<!--    </div>-->
    <img src="../../assets/images/SVG/downArrow.svg"
         alt="down arrow"
         class="relative-position"
         :style="{top: top + 'px'}"
    />
  </div>
</template>

<script>
export default {
  name: "AnimatedArrowDown",
  data(){
    return {
      top: 0,
    }
  },
  mounted() {
    setInterval( async() => {
      await this.animate()
    }, 3000)
  },
  methods:{
    async animate(){
      this.top = 5
      setTimeout(() => {
        this.top = 0
      }, 200)
      setTimeout(() => {
        this.top = 5
      }, 400)
      setTimeout(() => {
        this.top = 0
      }, 600)
    }
  }
}
</script>

<style scoped lang="scss">
.animated_arrow_down {
  img{
    transition: .2s ease-out;
    width: 3vw;
  }
}
</style>
