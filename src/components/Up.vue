<template>
  <div class="up flex justify-center items-center shadow-5"
       @click="scrollUp"
       :style="{display: isShowed ? 'flex': 'none'}"
  >
    <q-icon name="expand_less" class="arrow" color="secondary"/>
  </div>

</template>

<script>
import {debounce} from "quasar";

export default {
  name: "Up",
  data() {
    return {
      isShowed: false
    }
  },
  mounted() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100)
    window.addEventListener('scroll', this.handleDebouncedScroll);
  },
  methods: {
    handleScroll(event) {
      this.isShowed = window.scrollY > 300;
    },
    scrollUp(time = 1000) {
      console.log('up')
      let interval = setInterval(() => {
        if (window.scrollY >= 50) {
          console.log('scrolling')
          window.scrollTo(0, window.scrollY - 50)
        } else {
          this.isShowed = false
          clearInterval(interval)
        }
      }, time)

    }
  },
  computed: {
    // isShowed(){
    //   return window.pageYOffset > 300;
    // }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleDebouncedScroll);
  }
}
</script>

<style lang="scss" scoped>
.up {
  width: 4vw;
  height: 4vw;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 5vh;
  right: 5vw;
  z-index: 10001;
  transition: all .8s ease;
  color: $secondary;

  &:hover {
    cursor: pointer;
    background-color: white;
    .arrow {
      color: $primary!important;
    }
  }
}

.arrow {
  color: #FFBA40;
  font-size: 40px;
}
</style>
