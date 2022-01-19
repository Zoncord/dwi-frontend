<template>
  <div class="greeting_screen">
    <div class="curves absolute">
      <CurvesScrollAnimation/>
    </div>
    <div class="limiter flex column justify-between">
      <div class="introduction_wrapper flex column justify-between items-center">
        <div class="header_nav_buttons flex self-end q-mt-md">
          <HeaderNavButtons/>
        </div>
        <div class="introduction text-center">
          <h2>Days Without Incidents</h2>
          <h5>Service that attracts you to try something new </h5>
          <q-btn class="get_started q-mt-xl">Join to us</q-btn>
        </div>
        <AnimatedArrowDown class="arrow"/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNavButtons from "components/HeaderNavButtons";
import CurvesScrollAnimation from "components/CurvesScrollAnimation";
import AnimatedArrowDown from "components/AnimatedArrowDown";

export default {
  name: "GreetingLayout",
  components: {
    HeaderNavButtons,
    CurvesScrollAnimation,
    AnimatedArrowDown,
  },
  mounted() {
    setInterval(() => {
      // console.log(this.scroll)
    }, 100)
  },
}
</script>

<style lang="scss" scoped>

.arrow {
  margin-bottom: 5px;
}

.curves {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
}
.get_started{
  background-color: $oB;
  font-size: min(20px);
  color: white;
  width: max(20%, 200px);
}
</style>
