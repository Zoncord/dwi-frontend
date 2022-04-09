<template>
  <!--  <div class="flex column ">-->

  <div class="content">
    <Header color-scheme="dark" navButtons navigation/>
    <div class="about " :style="{overflow: 'hidden'}">


      <div class="about_content limiter relative-position flex justify-center"
           :style="{
              top: top + '%',
              // opacity: opacity,
           }"
      >

        <div class="card_description flex justify-between items-center">
          <Card class="example-card q-pa-md">

            <h3>Working for you</h3>
            <h3>
              <AnimatedNumberCountUp :animation-time="100" :end-number="10000"/>
            </h3>
            <h4>days</h4>
          </Card>
          <div class="text-center">
            <h2 class="q-mt-md">Create your own cards</h2>
            <h5>Track your progress by creating flashcards.<br/> It has never been so easy.</h5>
          </div>
        </div>

      </div>
    </div>
    <div class="" v-if="canShowAdditionalContent">
      HelloWorld
      <Long/>
    </div>
    <!--    </div>-->
  </div>

</template>

<script>
import {mapGetters, mapMutations} from "vuex";

import Card from "components/Card";
import DateCard from "components/DateCard";
// import NumberCountUpAnimation from "components/AnimatedNumberCountUp";
import Header from "components/MainPageHeader";
import AnimatedNumberCountUp from 'components/AnimatedNumberCountUp'
import Long from "components/Long";
import AnimatedText from "components/AnimatedText";
import {showAdditionalContent} from "src/store/StartPageStore/mutations";

export default {
  name: "AboutCards",
  components: {
    // DateCard,
    Header,
    Card,
    AnimatedNumberCountUp,
    // AnimatedText,
    Long,
  },
  data() {
    return {}
  },
  mounted() {
    setInterval(() => {
      if (this.top === 0){
        setTimeout(() => {
          this.showAdditionalContent()
        }, 1000)
      }
      else{
        if (this.canShowAdditionalContent) {
          this.hideAdditionalContent()
        }
      }
    }, 100)
  },
  computed: {
    ...mapGetters('mainPageStore', ['scroll', 'startScrollVal', 'canShowAdditionalContent']),
    top() {
      if (250 - (this.scroll - this.startScrollVal) / 15 > 0) {
        return 250 - (this.scroll - this.startScrollVal) / 15
      }
      return 0
    },
    opacity() {
      return ((this.scroll - this.startScrollVal) / 125 - 20) * 15 / 100
    }
  },
  methods:{
    ...mapMutations('mainPageStore', ['showAdditionalContent', 'hideAdditionalContent'])
  }
}
</script>

<style lang="scss" scoped>
header {
  opacity: 0;
  animation: show 1s 1;
  animation-fill-mode: forwards;
}

.example-card {
  min-width: 300px;
  width: 25vw;
  max-width: 380px;
  min-height: 400px;
  height: 35vw;
  max-height: 500px;
  //height: clamp(35vw, 400px, 450px);
  position: sticky;
  top: 0;
}

.content {
  background-color: #0B132B;
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
  flex-grow: 1;
  height: calc(100vh - 4.5vw);
}

.about_content {
  color: white;
  transition: top 0.5s ease-out, opacity 2.5s;
}

.card_wrapper {
  width: 25vw;
  height: 32vw;
}

@keyframes show {
  0% {
    //top: 100px;
    opacity: 0;
  }
  100% {
    //top: 0;
    opacity: 1;
  }
}
</style>
