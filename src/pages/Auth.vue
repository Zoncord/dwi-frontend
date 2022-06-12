<template>
<div class="">

</div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Auth",
  methods: {
    ...mapMutations('mainStore', ['changeToken']),
    ...mapGetters('mainStore', ['token'])
  },
  async mounted(){
    await this.$axios.post(this.$dwiApi + 'users/authorization/', {
      code : this.$route.query.code,
    }).then(async res => {
      this.changeToken(res.data.token)
      await this.$router.push('/').then(() => document.location.reload())
    })
  },

}
</script>

<style scoped>

</style>
