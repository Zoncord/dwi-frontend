<template>
  <UI>
    <AchievementLayout :key="this.$route.params.id"/>
  </UI>
</template>

<script>
import AchievementLayout from "layouts/AchievementLayout";
import UI from "components/Ui/UI";

export default {
  name: "AchievementPage",
  components: {
    AchievementLayout,
    UI,
  },
  beforeRouteUpdate(){
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
