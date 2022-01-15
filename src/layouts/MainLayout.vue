<template>
  <div class="start">
    <div class="description" v-if="isScrolled">asdfasf</div>
    <div class="curves absolute">
      <CurvesScrollAnimation/>
    </div>
    <div class="limiter flex column justify-between">

      <div class="introduction_wrapper flex justify-between items-center">
        <div class="introduction text-center">
          <h2>Days Without <br/> Incidents</h2>
          <h5>Service that attracts you <br/> to try something new </h5>
        </div>
        <div class="header_nav_buttons self-start q-mt-lg">
            <HeaderNavButtons/>

        </div>
      </div>
      <AnimatedArrowDown class="arrow"/>
    </div>
  </div>
<!--  <div class="about window-height" v-if="isScrolled">-->
<!--    HelloWorld-->
<!--  </div>-->
  <div class="main flex justify-center items-center">
  </div>
</template>

<script>
import HeaderNavButtons from "components/HeaderNavButtons";
import Long from "components/Long";
import CurvesScrollAnimation from "components/CurvesScrollAnimation";
import AnimatedArrowDown from "components/AnimatedArrowDown";

export default {
  name: 'MainLayout',
  components: {
    HeaderNavButtons,
    CurvesScrollAnimation,
    AnimatedArrowDown
    // Long,
  },
  data() {
    return {
      long: true,
      isScrolled: false,
    }
  },
  mounted() {
    // let aboutPage = document.getElementsByClassName('about')[0]
    // let curves = document.getElementsByClassName('sm_curve')
    // setInterval(() => {
    //   let rects = [curves[0].getBoundingClientRect(), curves[1].getBoundingClientRect()]
    //   if (window.innerWidth - rects[0].width < -200) {
    //     this.isScrolled = true
    //   }
    //   // if (this.isScrolled && aboutPage)
    // }, 100)


  }
}
</script>

<style lang="scss">
.arrow{
  margin-bottom: 5px;

}
.login {
  background-color: white !important;
}

.signup {
  background-color: #2941AB !important;
}

.curves {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.start {
  height: 100vh;
  background-color: #1ED760;
  overflow: hidden;
}

.about {
  background-color: #73EC9B;
}

.introduction_wrapper {
  flex-grow: 2;
}

.introduction {
  //background-color: red;
  //width: 50%;
  h2 {
    font-size: 6.7vw;
    font-weight: 400 !important;
    line-height: 6vw;
    color: white;
    margin-bottom: 30px;
  }

  h5 {
    color: #2941AB;
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
