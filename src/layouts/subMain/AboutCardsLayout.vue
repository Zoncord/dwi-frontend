<template>
  <div class="content">
    <div class="about window-height" :style="{overflow: 'hidden'}">
      <div class="about_content limiter relative-position flex justify-center"
           :style="{
              top: top + '%',
              opacity: opacity,
           }"
      >
        <div class="card_description flex justify-between items-center">
          <div class="">
            <div class="card">
              <h3>Already working for you</h3>

            </div>
          </div>
          <div class="text-center">
            <h3 class="q-mt-md">Create your own cards</h3>
            <p>Track your progress by creating flashcards. It has never been so easy.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import Card from "components/Card";

export default {
  name: "AboutCards",
  components: {
    // Card,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('mainPageStore', ['scroll', 'startScrollVal']),
    top() {
      if (250 - (this.scroll - this.startScrollVal) / 15 > 0) {
        return 250 - (this.scroll - this.startScrollVal) / 15
      }
      return 0
    },
    opacity() {
      return ((this.scroll - this.startScrollVal) / 125 - 20) * 15 / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  height: 200%;
  img{
    width: 100%;
  }
}
.greeting_screen {
  height: 100vh;
  background-color: white;
  overflow: hidden;
}

.card_description {
  width: 100%;
}

.about {
  background-color: #0B132B;
}

.about_content {
  color: white;
  transition: top 0.5s ease-out, opacity 2.5s;
}
.card_wrapper{
  width: 25vw;
  height: 32vw;
}

</style>
