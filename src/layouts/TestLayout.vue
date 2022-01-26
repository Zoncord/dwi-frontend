<template>
  <div class="container">
    <CurvesScrollAnimation>
      <div class="limiter flex justify-center items-center full-height">
        <h1>Hello world</h1>
      </div>
    </CurvesScrollAnimation>
    <div class="about full-width">
      <div class="about__content flex column justify-between ">
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
          <div class="texts-container float-right">
            <div class="text-container__discr">
              <h2 class="q-mb-md">Create your own cards</h2>
              <h5>Track your progress by creating flashcards.<br/> It has never been so easy.</h5>
            </div>
            <div class="text-container__discr">
              <h2 class="q-mb-md">Inspire by your achievements</h2>
              <h5>Every day you can see, that's goal is so close</h5>
            </div>
            <div class="text-container__discr">
              <h2 class="q-mb-md">And if you wouldn't succeed</h2>
              <h5>Don't be upset and start again</h5>
            </div>
          </div>
        </div>
      </div>
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
    CurvesScrollAnimation,
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
        end: '+=5000',
        scrub: true,
        pin: true,
        markers: true,
      }
    })
    tl.to('.l_curve', {
      width: 2 * window.innerWidth,
      duration: 10,
    })
      .to('.md_curve', {
        width: 2 * window.innerWidth,
        // ease: 'power1',
        duration: 10,
        // duration: 2,

      }, '+=10')
      .to('.sm_curve', {
        width: 2 * window.innerWidth,
        // delay: .5,
        // duration: 2,
        // ease: 'power1',
        duration: 10,
      }, '+=10')
      .from('header', {
        opacity: 0,
      },)
      .from('.about', {
        yPercent: 100,
        duration: 20,
        ease: 'slow'
      }, '+=15')
    //   .to('.texts-container', {
    //     yPercent: -33.3,
    //     duration: 30,
    //     // ease: 'slow',
    //   }, '+=20')
    //   .to('.texts-container', {
    //     yPercent: -66.6,
    //     duration: 30,
    //     // ease: 'slow',
    //   }, '+=20')
    //   .to('.date_card_menu', {
    //     height: 'auto',
    //     duration: 3,
    //   }, '+=2')
    //   .to('.btn_refresh', {
    //     // opacity: 0.4,
    //     backgroundColor: 'red',
    //     duration: 5,
    //   }, '+=1')
    // .from('.btn_refresh', {
    //   backgroundColor: 'none',
    //   duration: 5,
    // })
      // .from('.btn_refresh', {
      //   opacity: 0.4,
      //   duration: 2,
      // }, '+=1')
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
}

.example-card {
  color: $oB;
  width: 90%;
  height: 80%;
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
  overflow: hidden;
}

.about {
  //width: 100%;
  height: 100vh;
  //background-color: $oB;
  //position: absolute;
  top: 0;
  z-index: 400;
}
</style>
