<template>
<div class="date">
  <p v-if="fullDate" class="q-mr-sm">{{ date }}</p>
  <q-skeleton width="100px" v-else class="q-mr-sm"/>
  <p class="q-mr-sm"> {{ $t('achievement.at') }}</p>
  <p v-if="fullDate" class="q-mr-sm">{{ time }}</p>
  <q-skeleton width="100px" v-else/>
</div>
</template>

<script>
export default {
  name: "DateComponent",
  props: {
    fullDate: {
      required: true,
    }
  },
  computed: {
    preparedDate(){
      return new Date(this.fullDate)
    },
    date(){
      return this.preparedDate.toLocaleDateString()
    },
    time(){
      return this.preparedDate.toLocaleTimeString()
    }
  }
}
</script>

<style lang="scss" scoped>
.date{
  *{
    display: inline-block;
  }
}
</style>
