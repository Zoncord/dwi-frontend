<template>
  <div class="card_wrapper flex justify-center items-center"
       @mouseenter="startRotation"
       @mousemove="rotate"
       @mouseleave="stopRotation"
  >
    <q-card class="card flex column  items-center shadow-10"
            :class="'card' + this.index"
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
        <div class="nav_bar flex justify-between">
          <q-btn class="btn_refresh" icon="cached" unelevated></q-btn>
          <q-btn class="btn_wysiwyg" icon="wysiwyg" unelevated></q-btn>
          <q-btn class="btn_settings" icon="settings" unelevated></q-btn>
          <q-btn class="btn_close" icon="close" unelevated></q-btn>
        </div>
      </div>
      <div class="settings flex column justify-center items-center">
<!--        <q-btn flat >Изменить название</q-btn>-->
<!--        <q-btn flat unelevated>Блог</q-btn>-->
<!--        <q-btn flat unelevated>Сбросить</q-btn>-->
<!--        <q-btn flat unelevated>Удалить</q-btn>-->
      </div>

    </q-card>
  </div>
  <!--  </div>-->
</template>
<script>
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
      rotateLock: false,

      width: null,
      height: null,


      rect: null,
    }
  },
  mounted() {
    this.isMounted = true
    this.rect = document.getElementsByClassName('card' + this.index)[0].getBoundingClientRect()
  },
  methods: {
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
    startRotation(event) {
      this.rect = event.target.getBoundingClientRect()
      this.transition = 'none'
    },
    stopRotation() {
      this.transition = 'all .8s ease'
      this.transform = `perspective(500px) rotateY(0deg) rotateX(0deg)`
      this.isFlipped = false

    },
    flip() {
      this.rotateLock = true
      this.isFlipped = !this.isFlipped
      this.transition = 'all .8s ease'
      this.xAxis -= 180
      this.transform = `perspective(500px) rotateY(${this.xAxis}deg)  rotateX(${this.yAxis}deg)`
      setTimeout(() => {
        this.transition = 'none'
        this.rotateLock = false
      }, 800)
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
  width: 25%;
  height: 325px;
  //z-index: 1000;
  //background-color: red;
  //transform-style: preserve-3d;

}

.q-card {
  position: absolute;
  transform-style: preserve-3d;
  width: 90%;
  height: 90%;
  transition: all .5s ease;
  border-radius: 15px;
  color: $primary;
  //overflow: hidden;
  h4 {
    //color: $primary;

  }

  h3 {
    color: black;
  }

  .front_side {
    border-radius: 15px;
    backface-visibility: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    .nav_bar {
      transition: .5s;
      width: 100%;
      height: 0;
      overflow: hidden;
      border-radius: 15px;
      background-color: $additional;
      color: white;
      .q-btn{
        z-index: 10000000;
        //background-color: red;
        &:hover{
          background-color: red !important;
        }
      }
    }
    &:hover {
      .nav_bar{
        height: 40px;
      }
    }
  }

  .settings {
    overflow: hidden;
    border-radius: 15px;
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
