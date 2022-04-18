<template>
  <div class="news ">
    <div class="flex column">
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.big-card{
  width: calc(#{$columnSize} * 4 + #{$spaceSize} * 3) !important;
  height: 600px !important;
}
.card {
  border-radius: 10px;
  background-color: white;
  width: calc(#{$columnSize} * 2 + #{$spaceSize});
  height: 300px;
  margin-right: $spaceSize;
  position: relative;
}
.last{
  margin-right: 0;
}
</style>
