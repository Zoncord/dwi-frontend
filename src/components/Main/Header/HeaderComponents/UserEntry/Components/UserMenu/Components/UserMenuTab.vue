<template>
  <q-item clickable v-close-popup dense :href="to" exact-active-class="user-menu-tab--exact-active" replace >
      <q-item-section class="flex items-center">
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
    },
    href: {
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
a{
  color: black;
}
.user-menu-tab--exact-active {
  color: $highlight;
}

.user-entry__menu-list__icon {
  margin-right: 3px;
}

.q-item__section {
  flex-direction: row;
}
</style>
