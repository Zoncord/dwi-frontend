<template>
<div class="container">
  <div class="r">
    <img src="../assets/images/SVG/curvedLine.svg" alt="curve">
    <h4>Hello world</h4>
  </div>

</div>
</template>

<script>
export default {
  name: "CurveTestLayout"
}
</script>

<style scoped>
.container{
  height: 100vh;
  width: 100vw;
}
  .r{
    width: 60%;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  }
  img{
    height: 100%;
    width: 100%;
  }
  h4{
    top: 40px;
    position: absolute;
    margin-left: 20px;
  }
</style>
