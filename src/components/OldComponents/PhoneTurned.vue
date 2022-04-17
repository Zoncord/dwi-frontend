<template>
  <div class="main flex justify-center items-center">


    <img class="phone_img" src="../assets/images/phone.png" alt="img"
         :style="{width: width + 'px', height: width *1.8 + 'px'}">

    <div class="screen flex justify-center items-center"
         :style="{width: width / 2+ 'px', height: width * .88 + 'px'}">
    </div>
  </div>
</template>

<script>
export default {
  name: "TestLayout",
  props: {
    width: {
      type: Number,
      default: 200,
    }
  }
}
</script>

<style scoped>
.main{
  /*width: 2000px;*/
}
.phone_img{
  width: 15%;
}
.scr_img{
  width: 100%;
}
.screen{

  background-color: red;
  /*overflow: hidden;*/
  /*padding: 12px;*/
  margin-left: 10px;
  /*margin-bottom: 10px;*/
  transform-style: preserve-3d;
  z-index: 1000;
  opacity: .5;
  position: absolute;
  transform: scale3d(2,2,1) rotate3d(2.9, 8, -0.05,
  45deg);
  display: flex;
  justify-content: center;
  width: 5%;
  /*height: 10px;  */
  /*height: 13.5vw;*/
  /*height: ;*/
  border-radius: 15px;

}
</style>
