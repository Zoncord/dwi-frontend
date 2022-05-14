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
    console.log(this.$route.query.code)
    await this.$axios.post(this.$dwiApi + 'users/authorization/', {
      code : this.$route.query.code,
    }).then(async res => {
      console.log(res)
      await this.changeToken(res.data.token)
      await this.$router.push('/').then(() => document.location.reload())
    }).catch(err => {
      console.log(err)
    })
    return {

    }
  },

}
</script>

<style scoped>

</style>
