<template>
  <div class="card_wrapper flex justify-center items-center"
       @mouseenter="startRotation"
       @mousemove="rotate"
       @mouseleave="stopRotation">
    <q-card class="card flex column  items-center shadow-10"
            ref="card"
            @click="flip"
            :style="{
            transform: this.transform,
            transition: this.transition
          }"
    >
      <!--      <div class="card_side"/>-->
      <div class="front_side" v-if="!isFlipped">
        <h4 class="q-mx-lg q-my-md">CardName</h4>
        <div class="count_wrapper flex justify-center items-center ">
          <h5>{{ count }}</h5>
        </div>
      </div>
      <div class="settings flex column justify-center items-center" v-else>
        <q-btn :unelevated="true">Сбросить</q-btn>
        <q-btn  :unelevated="true">Настройки</q-btn>
        <q-btn  :unelevated="true">Удалить</q-btn>
      </div>

    </q-card>
  </div>
  <!--  </div>-->
</template>
<script>
import {debounce} from "quasar";

export default {
  name: "DateCard",
  props: {
    name: {
      type: String,
      default: 'CardName',
    },
    count: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      transform: "none",
      transition: "none",
      isMounted: false,
      xAxis: null,
      yAxis: null,
      isFlipped: false,

      width: null,
      height: null,
    }
  },
  mounted() {
    this.isMounted = true
    // console.log(this.settingsOpacity)
    // console.log(this.$refs['card'].getBoundingClientRect() , this.index)
  },
  methods: {
    rotate(event) {
      let rect = event.target.getBoundingClientRect()
      this.xAxis = (event.pageX - rect.x - rect.width / 2) / 6
      this.yAxis = (event.pageY - rect.y - rect.height / 2) / 6
      if (this.isFlipped) {
        this.xAxis -= 180
        this.yAxis *= -1
      }
      this.transform = `perspective(500px) rotateY(${this.xAxis}deg) rotateX(${-this.yAxis}deg)`
    },
    startRotation() {
      this.transition = 'none'
    },
    stopRotation() {
      this.transition = 'all .8s ease'
      this.transform = `perspective(500px) rotateY(0deg) rotateX(0deg)`
      this.isFlipped = false

    },
    flip() {
      this.isFlipped = !this.isFlipped
      this.transition = 'all .8s ease'
      this.xAxis -= 180
      this.transform = `perspective(500px) rotateY(${this.xAxis}deg)  rotateX(${this.yAxis}deg)`
      setTimeout(() => {
        this.transition = 'none'

      }, 800)

    },
  },
}
</script>

<style lang="scss" scoped>
body {
  perspective: 1000px;
}

.card_wrapper {
  width: 25%;
  height: 20vw;
  transform-style: preserve-3d;
}

.card_side {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 5%;
}

.q-card {
  transform-style: preserve-3d;
  width: 90%;
  height: 90%;
  transition: opacity .5s;
  border-radius: 5%;
  overflow: hidden;
  backface-visibility: hidden;



  .count_wrapper {
    flex-grow: 10;
  }
  &:hover {
    cursor: pointer;
  }

  .settings {
    transition: .2s;
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    z-index: 100;
    transform: rotateY(180deg);
    .q-btn {
      width: 100%;
      height: 33.3%;
    }
  }
}


</style>
