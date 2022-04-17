<template>
  <div class="find-wrapper">
    <q-icon name="search" v-if="!condition" @click="open"/>
    <div class="find-button flex justify-between items-center shadow-3 q-px-md" :style="{width: width}" v-else>
      <q-input class="find__input" borderless/>
      <div class="">
        <q-icon name="search"></q-icon>
        <q-icon name="close" @click="close"></q-icon>
      </div>
    </div>
  </div>
  <!--  <div class="close" @click="close" v-if="condition"></div>-->
</template>

<script>

export default {
  name: "FindButton",
  data() {
    return {
      width: null,
      condition: false,
    }
  },
  methods: {
    onClick() {
      if (this.condition) {
        this.close()
      } else {
        this.open()
      }
    },
    open() {
      this.width = '50vw'
      this.condition = true
      console.log(this.condition)
    },
    close() {
      this.width = null
      this.condition = false
      console.log(this.condition)
    }
  },
}
</script>

<style lang="scss">
.find-wrapper {
  z-index: 1000;
}

.find-button {
  width: 0;
  height: 100%;
  background-color: white;
  float: right;
  z-index: 10000000;
  border-radius: 10px;
  transition: 1s;

  * {
    height: 100%;
  }
}

.find__input {
  flex-grow: 1;
}

.q-field__native.q-placeholder {
  height: 40px;
}

.close {
  left: 0;
  top: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 1;
}
</style>
