<template>
  <div class="">

  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Logout",
  methods: {
    ...mapMutations('mainStore', ['deleteToken'])
  },
  mounted() {
    this.deleteToken()
    window.location.href = this.$enterRedirect
  }
}
</script>

<style scoped>

</style>
