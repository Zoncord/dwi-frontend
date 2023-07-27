<template>
<div class="date">
  <p v-if="parent.creationDateTime" class="q-mr-sm">{{ parent.date }}</p>
  <q-skeleton width="100px" v-else class="q-mr-sm"/>
  <p class="q-mr-sm"> {{ $t('achievement.at') }}</p>
  <p v-if="parent.creationDateTime" class="q-mr-sm">{{ parent.time }}</p>
  <q-skeleton width="100px" v-else/>
</div>
</template>

<script>
export default {
  name: "DateComponent",
  props: {
    parent: {
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.date{
  *{
    display: inline-block;
  }
}
</style>
