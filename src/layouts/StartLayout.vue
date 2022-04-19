<template>
  <Grid/>
  <div class="main-container">
    <a id="beginning"></a>
    <div class="sections">
      <Header :color="headerColor" nav-buttons :navigation="headerNavigation" :logo="headerLogo"/>
      <section class="first-section">

        <CurvesScrollAnimation>
          <div class="full-height flex column justify-between items-center">
            <div class=""/>
            <div class="limiter text-center">
              <h1 class="site-name q-mb-md">Days Without Incidents</h1>
              <h4>Service that attracts you to try <br> something new</h4>
            </div>
            <AnimatedArrowDown/>
            <img src="../assets/images/SVG/phoneCurve.svg" alt="curve" class="start-mobile-curve">
          </div>
        </CurvesScrollAnimation>
      </section>
      <div class="">
        <section class="second-section flex column">
          <a id="about"></a>
          <div class="limiter flex">
            <div class="desktop-card-wrapper">
              <DateCard
                class="desktop-card"
                title="Working for you"
                :hover="false"
                :nulled="isPhoneCardNulled"
              />
            </div>
            <div class="text-wrapper">

              <div class="text-wrapper__descr flex justify-center items-center">

                <div class="text-center">
                  <h2 class="q-mb-md">Create your own cards</h2>
                  <h5>Track your progress by creating flashcards. <br/> It has never been so easy.</h5>
                  <DateCard
                    class="phone-card q-mt-md"
                    title="Working for you"
                    :nulled="true"
                    :hover="false"
                  />
                </div>

              </div>

              <div class="text-wrapper__descr text-wrapper__descr-second flex justify-center items-center">
                <div class="text-center">
                  <h2 class="q-mb-md">Inspire by your achievements</h2>
                  <h5>Every day you can see, that's goal is so close.</h5>
                  <DateCard
                    class="phone-card q-mt-md"
                    title="Working for you"
                    :hover="false"
                  />
                </div>
              </div>

              <div class="text-wrapper__descr text-wrapper__descr-third flex justify-center items-center">
                <div class="text-center">
                  <h2 class="q-mb-md">And if you wouldn't succeed.</h2>
                  <h5>Don't be upset and start again.</h5>
                  <DateCard
                    class="phone-card last-phone-card q-mt-md"
                    title="Working for you"
                    :nulled="isPhoneCardNulled"
                    :hover="false"
                  />
                </div>

              </div>


            </div>
          </div>
        </section>
        <div class="curve-wrapper-first">
          <img src="../assets/images/SVG/layerCurve1.svg" class='layer-curves' alt="curve">
        </div>
        <a id="pricing"></a>
        <section class="third-section flex items-center">
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
          <a id="roadmap"></a>
          <div class="limiter flex column justify-center items-center q-py-xl">
            <h1 class="section-title">Our roadmap</h1>
            <ul class="features-list flex column justify-center">
              <li><h4>Videoblog about your way to a goals</h4></li>
              <li><h4>Users collaborations</h4></li>
              <li><h4>About cards</h4></li>
            </ul>
          </div>
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


import CurvesScrollAnimation from "components/OldComponents/CurvesScrollAnimation";
import Header from "components/OldComponents/MainPageHeader";
import AnimatedArrowDown from "components/OldComponents/AnimatedArrowDown";
import Footer from "components/OldComponents/Footer";
import PriceCard from "components/OldComponents/PriceCard";
import Grid from "components/OldComponents/Grid";
import DateCard from "components/OldComponents/DateCard";


export default {
  name: "MainLayout",
  components: {
    // Long,
    CurvesScrollAnimation,
    // Cards,
    Header,
    // DateCardMenu,
    AnimatedArrowDown,
    // PropsTest,
    Footer,
    PriceCard,
    Grid,
    DateCard
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
      curvesTl: null,
      cardMenuTl: null,
      isPhoneCardNulled: false,
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
      },
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    this.currentWorkingDays = this.workingDays
    window.addEventListener('resize', this.changeWindowWidth)
    if (this.windowWidth > 1024) {
      this.setupTimelines()
    } else {
      this.killTimelines()
      this.headerLogo = true
      this.headerColor = 'dark'
      gsap.timeline({
        scrollTrigger: {
          trigger: '.text-wrapper__descr-third',
          start: 'top top',
          toggleActions: 'play none reverse reset',
          onLeaveBack: () => {
            this.currentWorkingDays = this.workingDays
          },
          onLeave: () => {
            this.currentWorkingDays = 0
          }
        }
      }).to('.last-phone-card .date-card-menu', {
        height: 50,
        duration: .03,
        ease: 'none'
      })
        .to('.btn-refresh', {
          backgroundColor: '#9DACFF',
          duration: .1,
        }, '+=.5')
        .call(() => {
          this.isPhoneCardNulled = false
        })
        .to('.btn-refresh', {
          backgroundColor: 'white',
          duration: .1,
        })
        .call(() => {
          this.isPhoneCardNulled = true
        })
    }
  },
  methods: {
    changeWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    setupTimelines() {
      this.curvesTl = gsap.timeline({
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
      this.cardMenuTl = gsap.timeline({
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
        })
        .call(() => {
          this.isPhoneCardNulled = false
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
          this.isPhoneCardNulled = true
        })
    },
    killTimelines() {
      let AllTrigger = ScrollTrigger.getAll()
      for (let i = 0; i < AllTrigger.length; i++) {
        AllTrigger[i].kill(true)
      }
    }
  },
  watch: {
    windowWidth() {
      if (this.windowWidth >= 768) {
        this.setupTimelines()
      } else {
        this.killTimelines()
        this.headerLogo = true
        // this.headerColor = 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.site-name {
  font-weight: 400;
}

.curve-wrapper-second {
  background-color: $ind;
}

.join-btn {
  font-size: 1.4rem;
  background-color: $oB;
  color: white;
  //border-radius: 20px;
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
  min-width: 400px;
  height: calc(100vh - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: $header-height;

  .card {
    color: $oB;
    width: 90%;
    height: 60vw;
    max-height: 600px;
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

.phone-card {
  display: none;
}

.fourth-section {
  display: block;
  background-color: $ind;
  color: white;
  min-height: 50vh;

  .section-title {

  }

  .limiter {
    height: 100%;

    ul {
      flex-grow: 1;
      list-style-type: none;

      li {
        margin-top: 2%;
        margin-bottom: 2%;

        h4:before {
          content: '';
          display: inline-block;
          width: 10px;
          height: 10px;
          vertical-align: middle;
          border-radius: 50%;
          background-color: white;
          margin-right: 5px;
        }
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

@media (min-width: 1024px) {
  .start-mobile-curve {
    display: none;
  }
}

@media (max-width: 1024px) {
  .animated_arrow_down {
    display: none;
  }
  .desktop-card-wrapper {
    display: none;
  }
  .second-section {
    .limiter {
      justify-content: center;
    }
  }
  .third-section {

    .limiter {
      justify-content: center;
      flex-direction: column;
      margin-top: 25px;
      margin-bottom: 25px;

      * {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 70%;
        //height: calc(1024px * 60 / 100);
        //padding: 80px;
      }
    }
  }
  .phone-card {
    display: flex;
    width: 100%;
    height: calc(1024px * 45 / 100);
  }
  .text-wrapper {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }
  .text-wrapper__descr {
    height: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    .text-center{
      width: 100%;
    }
  }
}
</style>
