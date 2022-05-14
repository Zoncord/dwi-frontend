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
  mounted(){
    console.log(this.$route.query.code)
    this.$axios.post(this.$dwiApi + 'users/authorization/', {
      code : this.$route.query.code,
    }).then(res => {
      console.log(res)
      this.changeToken(res.data.token)
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
