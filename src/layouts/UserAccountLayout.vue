<template>
  <Grid/>
  <q-layout class="">
    <div class="limiter">
      <Header></Header>
    </div>
  </q-layout>
</template>

<script>
import Grid from "components/Grid";
import Header from "components/Header";
export default {
  name: "UserAccountLayout",
  components: {
    Grid,
    Header
  }

}
</script>

<style lang="scss" scoped>
.q-layout {
  background-color: $gray;
}
.limiter{
  height: 100px;
  padding-left: 20px;
  padding-right: 20px;
}
.ex{
  width: 100%;
  height: 20px;
  background-color: red;
}
.wrapper{
  width: 100%;
  height: 100px;
  background-color: blue;
}
</style>
