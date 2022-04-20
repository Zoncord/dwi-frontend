<template>
<div class="plus flex justify-center items-center">
  <div class="first-part plus-part"/>
  <div class="second-part plus-part"/>
</div>
</template>

<script>
export default {
  name: "Plus"
}
</script>

<style scoped>
.plus{
  width: 100px;
  height: 100px;
}
.plus-part{
  height: 5px;
  width: 100px;
  background-color: black;
}
.second-part{
  transform: rotate(90deg);
  position: absolute;
}
</style>
