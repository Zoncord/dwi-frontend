<template>
  <header class="">
    <div class="layout flex justify-between">
<!--      <div class="logo ">-->
        <h3 class="logo">DW<span>I</span></h3>
<!--        <q-img src="~assets/images/logo.svg"></q-img>-->
<!--      </div>-->
      <div class="nav_block flex justify-between items-center">
        <a class="user_name" href="#" v-if="isLoggedIn">UserName</a>
        <div class="nav_wrapper" v-else>
          <q-btn :rounded="true" class="login">Log In</q-btn>
          <q-btn :rounded="true" class="signup">Sign Up</q-btn>
<!--          <a class="log_in" href="#">Log in</a>-->
<!--          <a class="sign_up" href="#">Sign up</a>-->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 4.5vw;
  background-color: rgba(241, 242, 244, 0.8);
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 10000;
  .q-img{
    //height: 4vw;
    //width: auto;
    //width: auto;
    //height: 100%;
    //max-height: 100%;
    //max-height:100%;

  }
  .logo{
    font-weight: 400;
    //margin-left: 1vw;
    span{
      color: $primary;
    }
  }
  .nav_block {
    * {
      margin-left: 0.5vw;
      margin-right: 0.5vw;
    }
    font-size: 18px;
    .login{
      color: black;
      background-color: white;
      //border-radius: 10px;
    }
    .signup{
      color: white;
      background-color: black;
      //border-radius: 10px;
    }
  }
}
</style>
