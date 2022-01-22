<template>
  <q-card class="card flex column justify-between items-center text-center shadow-10">
    <slot/>
  </q-card>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="scss" scoped>
.card {
  height: 270px;
  border-radius: 10px;

  h6 {
    font-weight: 400;
  }
}
</style>
