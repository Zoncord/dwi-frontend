<template>
  <q-item clickable v-close-popup dense :to="to">
    <q-item-section class="flex items-center ">
      <q-icon :name="icon" class="user-entry__menu-list__icon"></q-icon>
      <p>{{ text }}</p>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "UserMenuTab",
  props: {
    icon: {
      required: true
    },
    text: {
      required: true
    },
    to: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>
