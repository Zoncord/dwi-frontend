<template>
  <div class="logo">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Logo",
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: Rounds, Roboto, sans-serif;
  font-weight: 700;
  font-size: 1.15vw;
  color: $primary;
}
</style>
