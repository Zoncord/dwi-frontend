<template>
  <Header></Header>

  <div class="main flex justify-center">
    <div class="layout">
      <h2 class="q-my-md q-ml-lg">Мои дни без <span>Происшествий</span></h2>
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
        {

        }, 1, 2, 3

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(243, 244, 245);

  h2 {
    span{
      color: $theme_color
    }
  }
}
</style>
