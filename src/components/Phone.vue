<template>
  <div class="">
    <div class="phone_screen"></div>
    <q-img class="phone_img" src="../assets/images/flatphone.png" alt="phone">
      <div class="phone_screen_wrapper">

      </div>
    </q-img>

  </div>
</template>

<script>
export default {
  name: "Phone",
  components: {

  },
}
</script>

<style scoped>
.phone_img {
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 100;
}

.phone_screen {
  margin-top: 4%;
  margin-left: 5%;
  border-radius: 8%;
  width: 1000px;
  height: 1000px;
  background-color: red;
  mask-image: url("../assets/images/flatphone.png");
}
</style>
