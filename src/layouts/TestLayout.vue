<template>
  <Grid/>
  <!--  <PropsTest :num="num"/>-->
  <div class="main-container">
    <div class="sections">
      <Header :color="headerColor" nav-buttons :navigation="headerNavigation" :logo="headerLogo"/>
      <section class="first-section">
        <CurvesScrollAnimation>
          <div class="full-height flex column justify-between items-center">
            <div class=""/>
            <div class="limiter text-center">
              <h2>Days Without Incidents</h2>
              <h3>Service that attracts you <br/>to try something new</h3>
              <q-btn class="q-mt-xl join-btn">Join to us</q-btn>
            </div>
            <AnimatedArrowDown/>
          </div>
        </CurvesScrollAnimation>
      </section>
      <div class="">
        <section class="second-section flex column">
          <div id="beginning"></div>
          <div class="limiter flex">
            <div class="desktop-card-wrapper">
              <Card class="q-pt-md">
                <h3>Working for you</h3>
                <h3>{{ currentWorkingDays }}</h3>
                <h3>days</h3>
                <DateCardMenu/>
              </Card>
            </div>
            <div class="text-wrapper">
              <div class="text-wrapper__descr flex justify-center items-center">
                <div class="text-center">
                  <h2 class="q-mb-md">Create your own cards</h2>
                  <h5>Track your progress by creating flashcards. <br/> It has never been so easy.</h5>
                </div>
              </div>
              <div class="text-wrapper__descr text-wrapper__descr-second flex justify-center items-center">
                <div class="text-center">
                  <h2 class="q-mb-md">Inspire by your achievements</h2>
                  <h5>Every day you can see, that's goal is so close.</h5>
                </div>
              </div>
              <div class="text-wrapper__descr text-wrapper__descr-third flex justify-center items-center">
                <div class="text-center">
                  <h2 class="q-mb-md">And if you wouldn't succeed.</h2>
                  <h5>Don't be upset and start again.</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="curve-wrapper-first">
          <img src="../assets/images/SVG/layerCurve1.svg" class='layer-curves' alt="curve">
        </div>
        <section class="third-section flex items-center">
          <a href="#beginning">UPasfdas</a>
          <div class="limiter flex justify-between items-center">
            <PriceCard
              v-for="(priceCard, title) in priceCards"
              :key="priceCard"
              :title="title"
              :price="priceCard.price"
              :description="priceCard.description"
            />
          </div>
        </section>
        <div class="curve-wrapper-second">
          <img src="../assets/images/SVG/layerCurve.svg" class='layer-curves' alt="curve">
        </div>
        <section class="fourth-section">
          <div class="limiter flex column items-center">
            <h1 class="section-title q-mt-xl">Our roadmap</h1>
<!--            <div class="flex column justify-center">-->
              <ul class="features-list flex column justify-center">
                <li><h4>Videoblog about your way to a goals</h4></li>
                <li><h4>Users collaborations</h4></li>
                <li><h4>About cards</h4></li>
              </ul>
<!--            </div>-->
          </div>
<!--          <div class="fourth-section__wrapper flex justify-center">-->

<!--          </div>-->
        </section>
        <div class="footer-curve">
          <img src="../assets/images/SVG/12312331.svg" alt="curve" class="footer-curve__first">
        </div>
        <Footer/>
      </div>
    </div>
  </div>

</template>
<script>
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


import Long from "components/OldComponents/Long";
import CurvesScrollAnimation from "components/OldComponents/CurvesScrollAnimation";
import Card from "components/OldComponents/Card";
import Header from "components/OldComponents/MainPageHeader";
import DateCardMenu from "components/OldComponents/DateCardMenu";
import AnimatedArrowDown from "components/OldComponents/AnimatedArrowDown";
import Footer from "components/OldComponents/Footer";
import PriceCard from "components/OldComponents/PriceCard";
import Grid from "components/OldComponents/Grid";


export default {
  name: "TestLayout",
  components: {
    // Long,
    CurvesScrollAnimation,
    Card,
    Header,
    DateCardMenu,
    AnimatedArrowDown,
    // PropsTest,
    Footer,
    PriceCard,
    Grid,
  },
  data() {
    return {
      showCardMenu: false,
      currentWorkingDays: null,
      workingDays: 175,
      headerNavigation: false,
      headerLogo: false,
      headerColor: 'light',
      num: 1,
      priceCards: {
        Basic: {
          price: '0$',
          description: 'Here you can get 5 free public cards',
        },
        Pro: {
          price: '5$',
          description: 'In order to get the best experience. No limited number of cards',
        },
        Student: {
          price: '3$',
          description: 'All pro features in a student price',
        }
      }
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
      .call(() => {
        this.headerNavigation = false
        this.headerLogo = false
        this.headerColor = 'light'
      })
      .call(() => {
        this.headerNavigation = true
        this.headerLogo = true
        this.headerColor = 'dark'
      })
      .to('.sm_curve', {
        width: window.innerWidth * 2,
      })

    let cardMenuTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.text-wrapper__descr-third',
        start: 'center center',
        end: '+=1000',
        toggleActions: 'play none reverse reset',
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
        duration: .03,
        ease: 'none'
      }).call(() => {
        this.currentWorkingDays = this.workingDays
      })
      .to('.btn-refresh', {
        backgroundColor: '#9DACFF',
        duration: .1,
      }, '+=.5')
      .to('.btn-refresh', {
        backgroundColor: 'white',
        duration: .1,
      })
      .call(() => {
        this.currentWorkingDays = 0
      })
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.curve-wrapper-second {
  background-color: $ind;
}

.join-btn {
  font-size: 1.4rem;
}

header {
  position: fixed;
}

.main-container {
  width: 100%;
  height: 100vh;
}

.sections {
  width: 100%;
  height: 200vh;
}

section {
  width: 100%;
  min-height: 100vh;
  //height: 100%;
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


.desktop-card-wrapper {
  width: 40%;
  height: calc(100vh - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: $header-height;

  .card {
    color: $oB;
    width: 90%;
    height: min(calc(40vw * 90 / 100), 550px)
  }
}

.text-wrapper {
  width: 60%;
}

.text-wrapper__descr {
  height: 100vh;
}

.curve-wrapper-first {
  background-color: $sC;
}

.third-section {
  background-color: $sC;
  .price-card {
    width: 28%;
    height: calc(#{$limiter_max_width} * 35 / 100);
  }
}

.fourth-section {
  display: block;
  background-color: $ind;
  color: white;
  height: 1px;
  .section-title{

  }
  .limiter{
    height: 100%;
    ul{
      flex-grow: 1;
      li{
        margin-top: 2%;
        margin-bottom: 2%;
      }
    }
  }
}

.footer-curve {
  background-color: $ind;
  img {
    display: block;
  }
}
</style>
