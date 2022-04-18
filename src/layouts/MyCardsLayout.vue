<template>
  <Up/>
  <div class="main flex column justify-center">
    <Header/>

    <div class="limiter">

      <h2 class="q-my-xl">My days without:<br>
        <span><AnimatedText/></span>
      </h2>
        <div class="search_wrapper flex justify-center">
          <Search/>
        </div>
        <div class="cards flex">
          <Card v-for="(card, index) in cards" :key="card" :index="index" :name="card.name" :count="card.count"></Card>
        </div>
      </div>
    <Long></Long>
  </div>
</template>

<script>
import Header from "components/OldComponents/MainPageHeader";
import Long from "components/OldComponents/Long";
import Card from "components/OldComponents/CardOld";
import AnimatedText from "components/OldComponents/AnimatedText";
import Up from "components/OldComponents/Up";
import Search from "components/Main/Header/HeaderComponents/Search/OldSearch";

export default {
  name: "MyCardsLayout",
  components: {
    Header,
    Long,
    Card,
    AnimatedText,
    Up,
    Search,
  },
  data() {
    return {
      cards: [
        {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        },
        {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        }, {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        },
        {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        },
        {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        }, {
          name: 'Greeeeeeebs',
          count: 10,
        },
        {
          name: 'Kou5en9',
          count: 30,
        },
        {
          name: 'Kou5en9',
          count: 50,
        },
        {
          name: 'Kou5en9',
          count: 80,
        },
        {
          name: 'Kou5en9',
          count: 120,
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.main {
  background-color: rgb(243, 244, 245);
  font-family: 'Source Sans Pro', sans-serif;
  .wrapper{
    transition: 0.5s ease;
  }
  .search_wrapper{
    width: 50%;
  }
  h2 {
    font-weight: 400;
    text-align: center;

    span {
      color: $primary
    }
  }
}
</style>
