<template>
  <div class="user-image-wrapper flex justify-center items-center">
    <q-img class="user-image" alt="User Image" :src="userImageUrl" spinner-size="0px" ratio="1"/>
  </div>
</template>

<script>

export default {
  name: "UserImage",
  props: {
    url: {
      required: true,
    }
  },
  computed: {
    userImageUrl() {
      if (this.url){
        return this.url
      }
      return 'https://kitchenideya.ru/wp-content/uploads/kitchenideafasad_emal_ral7001-95x95.jpg'
    }
  }
}
</script>

<style scoped>
.user-image{
  border-radius: 50%;
  /*width: 35px;*/
  /*margin: 10px;*/
}

</style>
