<template>
  <div class="user-image-wrapper flex justify-center items-center">
    <q-img class="user-image" alt="User Image" :src="userImageUrl" spinner-size="0px" ratio="1"></q-img>
  </div>
</template>

<script>

export default {
  name: "UserImage",
  computed: {
    userImageUrl() {
      return this.$userImageUrl
    }
  }
}
</script>

<style scoped>
.user-image{
  border-radius: 50%;
  /*width: 40px;*/
}

</style>
