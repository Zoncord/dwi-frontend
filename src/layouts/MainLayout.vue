<template>
  <div class="container">
    <div class="sections flex">
      <!--      <section class="">-->
      <!--        <CurvesScrollAnimation>-->
      <!--          <div class="limiter flex justify-center items-center full-height">-->
      <!--            <h1>Hello world</h1>-->
      <!--          </div>-->
      <!--        </CurvesScrollAnimation>-->
      <!--      </section>-->

      <section class="about">
        <div class="about__content flex column justify-between">
          <Header/>
          <div class="limiter">
            <div class="card-container float-left flex justify-center items-center">
              <Card class="example-card">
                <div class="example-card__descr flex column justify-between items-center q-pa-md">
                  <h3>Working for you</h3>
                  <h3>
                    175
                  </h3>
                  <h4>days</h4>
                </div>
                <DateCardMenu/>
              </Card>
            </div>
            <!--            <div class="texts-container float-right">-->
            <!--              <div class="text-container__discr">-->
            <!--                <h2 class="q-mb-md">Create your own cards</h2>-->
            <!--                <h5>Track your progress by creating flashcards.<br/> It has never been so easy.</h5>-->
            <!--              </div>-->
            <!--              <div class="text-container__discr">-->
            <!--                <h2 class="q-mb-md">Inspire by your achievements</h2>-->
            <!--                <h5>Every day you can see, that's goal is so close</h5>-->
            <!--              </div>-->
            <!--              <div class="text-container__discr">-->
            <!--                <h2 class="q-mb-md">And if you wouldn't succeed</h2>-->
            <!--                <h5>Don't be upset and start again</h5>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </section>
    </div>
  </div>
  <!--  <Long/>-->
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

export default {
  name: "TestLayout",
  components: {
    // Long,
    // CurvesScrollAnimation,
    Card,
    Header,
    DateCardMenu,
  },
  data() {
    return {
      showCardMenu: false,
    }
  },
  mounted() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        // start: 'top top',
        // end: '+=5000',
        scrub: true,
        pin: true,
        // markers: true,
      }
    })
    let elems = ['.l_curve', '.md_curve', '.sm_curve']
    for (let i in elems) {
      tl.add(gsap.effects.increaseCurves(elems[i]), i * 3)
    }

    tl.fromTo('.about', {
        xPercent: -100,
        yPercent: 100
      },
      {
        xPercent: -100,
        yPercent: 0
      }, 8)

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.card-container',
    //     start: 'center center',
    //     end: 'bottom bottom',
    //     scrub: 1,
    //     // end: 'bottom',
    //     pin: '.card-container',
    //     markers: true
    //   }
    // })
    gsap.timeline({
      scrollTrigger: {
        trigger: '.card-container',
        markers: true,
        scrub: true,
        pin: '.card-container'
      }
    })

  },
}
</script>

<style lang="scss" scoped>
.example-card__descr {
  flex-grow: 1;
}

.limiter {
  flex-grow: 1;
}

.card-container {
  width: 40%;
  height: calc(100vh - #{$header-height});
  z-index: 1000000000000000;
  //position: relative;
  //top: 0;
}

.example-card {
  color: $oB;
  width: 90%;
  height: 80%;
  z-index: 1000000000000000;
  //position: sticky;
  //top: 0;
}

.texts-container {
  width: 60%;

  .text-container__discr {
    height: calc(100vh - #{$header-height});
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    text-align: center;
  }
}

.container {
  //overflow: hidden;
  //width: 200vw;
}

.sections {
  //overflow: hidden;
  width: 200vw;
}

.about {
  //width: 100%;
  height: 300vh;
  background-color: $oB;
  //position: absolute;
  top: 0;
  z-index: 400;
  width: 100vw;
}

</style>
