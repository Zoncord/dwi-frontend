<template>
  <Card class="date_card">
    <div class="date_card_wrapper q-ma-md flex column justify-between">
      <h5>{{ title }}</h5>
      <h4>{{ days }}</h4>
      <h6>Days</h6>
    </div>
    <DateCardMenu v-if="hasMenu"/>
  </Card>
</template>

<script>
import Card from "components/Card";
import DateCardMenu from "components/DateCardMenu";

export default {
  name: "DateCard",
  props: {
    hasMenu: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    Card,
    DateCardMenu,
  },
  data() {
    return {
      days: 175,
      title: 'DateCardTitle'
    }
  }
}
</script>

<style lang="scss">
.q-card {
  color: black;

  &:hover {
    .date-card-menu {
      height: 30px !important;
    }
  }
}

.date_card_wrapper {
  flex-grow: 1;
}

.date-card-menu {
  height: 0;
  transition: .3s;
  overflow: hidden;

  * {
    font-size: 10px;
    flex-grow: 1;
  }
}

h6 {
  font-weight: 400;
}
</style>
