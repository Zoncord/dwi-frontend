<template>
  <div class="">
    <HeaderElement/>
    <div class="limiter">
      <ProfileLayout/>
    </div>
  </div>
</template>

<script>
import ProfileLayout from "layouts/ProfileLayout";
import HeaderElement from "components/Main/Header/HeaderElement";

export default {
  name: "ProfilePage",
  components: {
    ProfileLayout,
    HeaderElement,
  }
}
</script>

<style scoped>

</style>
