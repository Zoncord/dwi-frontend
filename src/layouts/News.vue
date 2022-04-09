<template>
  <div class="news">

  </div>
</template>

<script>
export default {
  name: "News",
  data(){
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }
}
</script>

<style scoped>
.news{
  width: 100%;
  display: flex;
}
.ex{
  background-color: red;
  width: 100%;
  height: 10px;
  margin-right: 15px;
}
</style>
