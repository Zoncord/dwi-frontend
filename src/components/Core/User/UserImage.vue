<template>
  <div class="user-image-wrapper flex justify-center items-center">
    <q-img class="user-image" alt="User Image" src="https://ic.pics.livejournal.com/instaforex_ru/25000283/168859/168859_900.jpg" spinner-size="0px" ratio="1"></q-img>
  </div>
</template>

<script>

export default {
  name: "UserImage",
  props: {

  }
}
</script>

<style scoped>
.user-image{
  border-radius: 50%;
  /*width: 40px;*/
}

</style>
