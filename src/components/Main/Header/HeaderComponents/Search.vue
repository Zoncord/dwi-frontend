<template>
<div class="search-wrapper">
  <q-input class="search" outlined v-model="query" :model-value="query" :label="$t('header.search.label')">
    <template v-slot:prepend>
      <q-icon name="search" color="black"></q-icon>
    </template>
  </q-input>
</div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>
