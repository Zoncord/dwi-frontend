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
  async mounted() {
    this.deleteToken()
    await this.$axios.post(`https://api.zoncord.tech/auth/logout/`)
    //TODO make not hardcode link
    window.location.href = this.$enterRedirect
  }
}
</script>

<style scoped>

</style>
