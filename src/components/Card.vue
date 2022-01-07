<template>
  <div class="card_wrapper flex justify-center items-center"
       @mouseenter="startRotation"
       @mousemove="rotate"
       @mouseleave="stopRotation"
  >
    <q-card class="card flex column  items-center shadow-10"
            ref="card"
            @click="flip"
            :style="{
            transform: this.transform,
            transition: this.transition
          }"
    >
      <div class="front_side flex column justify-center items-center">
        <h4>{{ this.name }}</h4>
        <div class="count_wrapper flex justify-center items-center ">
          <h3>{{ count }}</h3>
        </div>
      </div>
      <div class="settings flex column justify-center items-center">
        <q-btn :unelevated="true" @mousemove="ho">Настройки</q-btn>
        <q-btn :unelevated="true" @mousemove="ho">Блог</q-btn>
        <q-btn :unelevated="true" @mousemove="ho">Сбросить</q-btn>
        <q-btn :unelevated="true" @mousemove="ho">Удалить</q-btn>

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
      console.log('rotating')
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
    ho(){
      console.log('hovering')
    }
  },
}
</script>

<style lang="scss" scoped>
body {
  perspective: 1000px;
}

.card_wrapper {
  position: relative;
  min-width: 25%;
  height: 20vw;
  z-index: 1000;
  //background-color: red;
  //transform-style: preserve-3d;
}

.q-card {
  position: absolute;
  transform-style: preserve-3d;
  width: 90%;
  height: 90%;
  transition: all .5s ease;
  border-radius: 5%;
  color: $primary;
  //overflow: hidden;

  .front_side {
    border-radius: 5%;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;

    //color: white;
    //transform: rotateY(180deg);
  }

  .settings {
    overflow: hidden;
    border-radius: 5%;
    //transition: .2s;
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    backface-visibility: hidden;

    .q-btn {
      width: 100%;
      height: 25%;
    }
  }

  .count_wrapper {
    flex-grow: 10;
  }

  &:hover {
    cursor: pointer;
  }

  .front_side {

  }

}


</style>
