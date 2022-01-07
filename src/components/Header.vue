<template>
  <header class="">
    <div class="layout flex justify-between">
      <div class="logo">
        <q-img src="~assets/images/logo.svg"></q-img>
      </div>
      <div class="nav_block flex justify-between items-center">
        <a class="user_name" href="#" v-if="isLoggedIn">UserName</a>
        <div class="nav_wrapper" v-else>
          <a class="log_in" href="#">Log in</a>
          <a class="sign_up" href="#">Sign up</a>
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
  .logo {
    width: 4vw;
    height: 4vw;
    //background-color: mediumpurple;
    margin-left: 1vw;
    .q-img{
      //width: auto;
      //height: 100%;
      //max-height: 100%;
      height:100%;
      width: 75%;
    }
  }

  .nav_block {
    * {
      margin-left: 1vw;
      margin-right: 1vw;
    }

    font-size: 18px;
  }

  a {
    //color: #73ff9a;
    color: $theme_color;
  }
}

.q-btn {
  background-color: #70C244;
  color: white;
}

</style>
