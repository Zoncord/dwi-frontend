<template>
  <header class="flex justify-center items-center">
    <div class="limiter flex justify-between">
      <Logo class="flex items-center">DAYS WITHOUT INCIDENTS</Logo>
      <div class="nav_bar flex justify-between items-center">
        <a class="user_name" href="#" v-if="isLoggedIn">UserName</a>
        <HeaderNavButtons v-else/>

      </div>
    </div>
  </header>
</template>

<script>
import HeaderNavButtons from "components/HeaderNavButtons";
import Logo from "components/Logo";
export default {
  name: "Header",
  components:{
    Logo,
    HeaderNavButtons,
  },
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
  backdrop-filter: blur(4px);
  position: sticky;
  top: 0;
  z-index: 10000;
  .q-img{
  }
  //.logo{
  //  font-weight: 400;
  //  //margin-left: 1vw;
  //  span{
  //    color: $primary;
  //  }
  //  &:hover{
  //    cursor: pointer;
  //  }
  //}
  .nav_bar {
    font-size: 18px;
  }
}
</style>
