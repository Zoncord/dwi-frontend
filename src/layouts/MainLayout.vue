<template>
  <GreetingLayout v-if="currentScreen === 'greeting'"/>
  <AboutCardsLayout v-else-if="currentScreen === 'aboutCards'"/>
</template>

<script>

import GreetingLayout from "layouts/subMain/GreetingLayout";
import AboutCardsLayout from "layouts/subMain/AboutCardsLayout";
import {connectMouseScrollEvent} from "src/js/Functions";
import {mapGetters, mapMutations} from 'vuex'
import {debounce} from "quasar";

export default {
  name: 'MainLayout',
  components: {
    GreetingLayout,
    AboutCardsLayout,
  },
  data() {
    return {

    }
  },
  mounted() {
    connectMouseScrollEvent(this.onScroll.bind(this))
    setInterval(() => {
      if (this.currentScreen === 'greeting') {
        if (this.scroll > 1750) {
          this.changeScreen('aboutCards')
        }
      } else if (this.currentScreen === 'aboutCards') {
        if (this.scroll - this.startScrollVal < 0) {
          this.changeScreen('greeting')
        }
      }
    }, 100)
  },
  methods: {
    ...mapMutations('mainPageStore', ['changeScroll', 'changeScreen']),
    onScroll(e) {
      console.log(this.counter)
      let delta = e.deltaY || e.detail || e.wheelDelta
      if (this.currentScreen === 'greeting') {
        if (this.scroll + delta >= 0) {
          this.changeScroll(delta)
        }
      } else {
        this.changeScroll(delta)
      }
    },
  },
  computed: {
    ...mapGetters('mainPageStore', ['scroll', 'currentScreen', 'startScrollVal'])
  }
}
</script>

<style lang="scss" scoped>
.about_content {
  color: white;
  transition: top 1.5s, opacity 2.5s;
}

.arrow {
  margin-bottom: 5px;
}
.curves {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.greeting_screen {
  height: 100vh;
  background-color: white;
  overflow: hidden;
}

.about {
  background-color: #0B132B;
}

.introduction_wrapper {
  flex-grow: 2;
}

.introduction {
  h2 {
    font-size: 6.7vw;
    font-weight: 700 !important;
    font-family: 'Poppins', sans-serif;
    line-height: 6vw;
    color: #0B132B;
    margin-bottom: 30px;
  }

  h5 {
    color: #0B132B;
    font-size: 2.5vw;
    line-height: 2.5vw;
  }

  .header_nav_buttons {
    .nav_buttons {
      .q-btn {
        margin: 0 !important;
      }
    }
  }
}
</style>
