<template>
  <div class="container flex justify-center items-center">
    <div class="wrapper">
<!--    <PhoneTurned></PhoneTurned>-->
    <Phone></Phone>
    </div>
  </div>
<!--<div class="main flex justify-center items-center">-->


<!--  <img class="phone_img" src="../assets/images/phone.png" alt="img">-->
<!--  <div class="screen flex justify-center items-center">-->
<!--  </div>-->
<!--</div>-->
</template>

<script>
import PhoneTurned from "components/PhoneTurned";
import Phone from "components/Phone";
export default {
  name: "TestLayout",
  components: {
    // PhoneTurned,
    Phone,
  }
}
</script>

<style scoped>
.container{
  /*width: 50%;*/
}
.wrapper{
  width: 30%;
}
</style>
