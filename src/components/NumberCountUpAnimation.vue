<template>
  {{ number }}
</template>

<script>
export default {
  name: "NumberCountUpAnimation",
  props: {
    startNumber: {
      type: Number,
      default: 0,
    },
    endNumber: {
      type: Number,
      default: 100,
    },
    animationTime: {
      type: Number,
      default: 1000,
    },
    canStart: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      number: this.startNumber,
    }
  },
  mounted() {
    let interval = setInterval(() => {
      if (this.canStart){
        this.startAnimation()
        clearInterval(interval)
      }
    }, 100)
  },
  methods: {
    startAnimation(){
      let interval = setInterval(() => {
        this.number++
        if (this.number === this.endNumber) {
          clearInterval(interval)
        }
      }, this.animationTime / (this.endNumber - this.startNumber))
    }
  }

}
</script>

<style scoped>

</style>
