<template>
  <div class="limiter flex justify-between">
    <RotatingSurface v-for="(item, index) in items" :key="item" :index="index">
      <FlippingSurface>
        <DateCard class="front_side"/>
        <Card class="back_side">
          Hello world
        </Card>
      </FlippingSurface>
    </RotatingSurface>
  </div>
</template>

<script>
import RotatingSurface from "components/RotatingSurface";
import DateCard from "components/DateCard";
import FlippingSurface from "components/FlippingSurface";
import Card from "components/Card";

export default {
  name: "TestLayout",
  components: {
    RotatingSurface,
    DateCard,
    FlippingSurface,
    Card
  },
  data() {
    return {
      items: [1, 2, 3, 4]
    }
  }
}
</script>

<style scoped>

</style>
