<template>
  <div class="main-container">
    <div class="sections">
      <Header color-scheme="dark" nav-buttons/>
      <section class="first-section">
        <CurvesScrollAnimation>
          <div class="full-height flex column justify-between items-center">
<!--            <Header color-scheme="dark" nav-buttons/>-->
            <div class="limiter text-center">
              <h1>Days Without Incidents</h1>
              <h3>Service that attracts you <br/>to try something new</h3>
              <q-btn>Join to us</q-btn>
            </div>
            <AnimatedArrowDown/>
          </div>
        </CurvesScrollAnimation>
      </section>
      <div class="">
<!--      <Header color-scheme="dark" navigation nav-buttons></Header>-->
      <section class="second-section flex column">

        <div class="limiter flex">
          <div class="card-wrapper">
            <Card class="q-pt-md">
              <h3>Text</h3>
              <h3>{{ currentWorkingDays }}</h3>
              <h3>days</h3>
              <DateCardMenu/>
            </Card>
          </div>
          <div class="text-wrapper">
            <div class="text-wrapper__discr flex justify-center items-center">
              <div class="text-center">
                <h2 class="q-mb-md">Create your own cards</h2>
                <h5>Track your progress by creating flashcards. <br/> It has never been so easy.</h5>
              </div>
            </div>
            <div class="text-wrapper__discr text-wrapper__discr-second flex justify-center items-center">
              <div class="text-center">
                <h2 class="q-mb-md">Inspire by your achievements</h2>
                <h5>Every day you can see, that's goal is so close.</h5>
              </div>
            </div>
            <div class="text-wrapper__discr text-wrapper__discr-third flex justify-center items-center">
              <div class="text-center">
                <h2 class="q-mb-md">And if you wouldn't succeed.</h2>
                <h5>Don't be upset and start again.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="curve-wrapper">
        <img src="../assets/images/SVG/layerCurves.svg" class='layer-curves' alt="curve">
      </div>
      <section class="third-section">

        <div class="limiter flex justify-between items-center">
          <Card>Helloworld</Card>
          <Card>Helloworld</Card>
          <Card>Helloworld</Card>
        </div>
      </section>
    </div>
  </div>
  </div>
</template>
<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import Long from "components/Long";
import CurvesScrollAnimation from "components/CurvesScrollAnimation";
import Card from "components/Card";
import Header from "components/Header";
import DateCardMenu from "components/DateCardMenu";
import AnimatedArrowDown from "components/AnimatedArrowDown";


export default {
  name: "TestLayout",
  components: {
    // Long,
    CurvesScrollAnimation,
    Card,
    Header,
    DateCardMenu,
    AnimatedArrowDown,
  },
  data() {
    return {
      showCardMenu: false,
      currentWorkingDays: null,
      workingDays: 175,
    }
  },
  mounted() {
    this.currentWorkingDays = this.workingDays

    let curvesTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-section',
        start: 'top top',
        end: `bottom+=${window.innerHeight * 5} bottom`,
        pin: true,
        scrub: true,
      }
    })
      .to('.l_curve', {
        width: window.innerWidth * 2,
      })
      .to('.md_curve', {
        width: window.innerWidth * 2,
      })
      .to('.sm_curve', {
        width: window.innerWidth * 2,
      })


    let cardMenuTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-wrapper__discr-third',
        start: 'center center',
        end: '+=1000',
        toggleActions: 'play none reverse reset',
        // scrub: true,
        markers: true,
        pin: true,
        fastScrollEnd: true,
        onLeaveBack: () => {
          this.currentWorkingDays = this.workingDays
        },
        onLeave: () => {
          this.currentWorkingDays = 0
        }
      }
    })
      .to('.date-card-menu', {
        height: 50,
        duration: .3,
        // duration: .5,
        ease: 'none'
      }).call(() => {
        this.currentWorkingDays = this.workingDays
      })
      .to('.btn-refresh', {
        backgroundColor: 'red',
        duration: .1,
      })
      .to('.btn-refresh', {
        backgroundColor: 'white',
        duration: .1,
      })
      .call(() => {
        this.currentWorkingDays = 0
      })

    // cardMenuTl.to()

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
}
.main-container {
  width: 100%;
  height: 100vh;
  //overflow: hidden;
}

.sections {
  width: 100%;
  height: 200vh;
  //display: flex;
}

section {
  width: 100%;
  height: 100vh;
}

.first-section {
  color: $oB;
}

.second-section {
  background-color: $oB;
  height: auto;
  display: flex;
  color: white;
}

.card {
  color: $oB;
  width: 70%;
  height: calc(40vw * 90 / 100)
}

.card-wrapper {
  width: 40%;
  height: calc(100vh - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: $header-height;
}

.text-wrapper {
  width: 60%;
  //display: flex;
  //flex-direction: column;
}

.text-wrapper__discr {
  height: 100vh;
}
.curve-wrapper{
  background-color: $ind;
}
.third-section {
  background-color: $ind;
  .limiter{
    height: 100%;
  }
  .card {
    width: 20%;
  }
}

</style>
