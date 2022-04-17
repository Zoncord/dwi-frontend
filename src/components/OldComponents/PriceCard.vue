<template>
  <Card class="price-card q-pa-xl">
    <div class="price-card__wrapper">
      <h4 class="price-card__title">{{ title }}</h4>
      <h5 class="price-card__price">{{ price }}</h5>
    </div>
    <h5 class="price-card__descr">{{ description }}</h5>
    <q-btn class="offer-btn">Learn more</q-btn>
  </Card>
</template>

<script>
import Card from "components/OldComponents/Card";

export default {
  name: "PriceCard",
  components: {
    Card,
  },
  props: {
    title: {
      default: 'Offer',
    },
    price: {
      default: 'For free',
    },
    description: {
      default: 'Just free',
    },
  },
  data(){
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.price-card{
  min-width: 300px;
  //background-color: $oB;
  //color: white;
}
.price-card__title{
  font-weight: 600;
}
.price-card__price{
  font-weight: 500;
}
.offer-btn{
 width: 80%;
  //background-color: white;
  //color: $oB;
}
</style>
