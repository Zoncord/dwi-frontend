<template>
  <div class="window-width flex">
    <RotatingSurface v-for="(item, index) in items" :key="item" :index="index">

    </RotatingSurface>
  </div>
</template>

<script>
import RotatingSurface from "components/RotatingSurface";

export default {
  name: "TestLayout",
  components: {
    RotatingSurface,
  },
  data() {
    return {
      items: [1, 2, 3]
    }
  }
}
</script>

<style scoped>

</style>
