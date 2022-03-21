<template>
  <Card class="date_card" @mouseover="hover? menuHeight = 50 : null" @mouseleave="hover ? menuHeight = 0: null">
    <div class="date_card_wrapper q-ma-md flex column justify-between">
      <h3>{{ title }}</h3>
      <h3>{{ days }}</h3>
      <h3>Days</h3>
    </div>
    <DateCardMenu v-if="hasMenu" :style="{height: menuHeight + 'px'}"/>
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
    },
    title: {
      default: 'CardTitle'
    },
    customDate: {
      default: false,
    },
    hover: {
      default: true,
    },
    nulled: {
      default: false,
    }
  },
  components: {
    Card,
    DateCardMenu,
  },
  data() {
    let days = 175
    if (this.customDate){
      days = this.customDate
    }
    return {
      // days: days,
      defaultDays: 175,
      menuHeight: 0,
    }
  },
  computed: {
    days(){
      if (this.nulled){
        return 0
      }
      else{
        return this.customDate ? this.customDate : this.defaultDays
      }
    }
  },
}
</script>

<style lang="scss">
.q-card {
  color: black;
  overflow: hidden;
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
