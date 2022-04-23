<template>
  <q-item clickable class="search-recommendation fit flex items-center">
    <q-item-section class="search-recommendation__section fit q-px-md">
      <div class="flex justify-between fit items-center">
        <p>{{ title }} уже {{ days }} дней</p>
        <div class="flex items-center">
          <p class="q-mr-sm">{{ owner }}</p>
          <UserImage class="search__advice-list__user-image"/>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
export default {
  name: "SearchRecommendsElement",
  components: {
    UserImage,
  },
  props: {
    title: {
      required: true
    },
    days: {
      required: true
    },
    owner: {
      required: true,
    },
    imageUrl: {
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
.search-recommendation{
  border-bottom: solid 1px $border_color;
}
</style>
