<template>
  <UI>
    <ProfileLayout :key="userId"/>
  </UI>
</template>

<script>
import ProfileLayout from "layouts/ProfileLayout";
import UI from "components/Ui/UI";

export default {
  name: "ProfilePage",
  components: {
    ProfileLayout,
    UI,
  },
  data() {
    return {
      userId: this.$route.params.userId,
    }
  },
  beforeRouteUpdate(to) {
    this.userId = to.params.userId
  }
}
</script>

<style scoped>

</style>
