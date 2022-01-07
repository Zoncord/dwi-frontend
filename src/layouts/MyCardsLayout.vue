<template>
  <Header></Header>

  <div class="main flex justify-center">
    <div class="layout">
      <h2 class="q-my-xl">My days without <span>Incidents</span></h2>
      <div class="cards flex">
        <Card v-for="(card, index) in cards" :key="card" :index="index"></Card>
      </div>
    </div>
    <Long></Long>
  </div>
</template>

<script>
import Header from "components/Header";
import Long from "components/Long";
import Card from "components/Card";

export default {
  name: "MyCardsLayout",
  components: {
    Header,
    Long,
    Card,
  },
  data() {
    return {
      cards: [
        {}, 2, 3, 4, 5, 5,
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(243, 244, 245);
  font-family: 'Source Sans Pro', sans-serif;
  h2 {
    font-weight: 400;
    span {
      color: $primary
    }
  }
}
</style>
