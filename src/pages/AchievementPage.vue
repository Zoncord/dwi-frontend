<template>
  <HeaderComponent></HeaderComponent>
<div class="limiter">
  <AchievementLayout/>
</div>
</template>

<script>
import HeaderComponent from "components/Main/Header/HeaderComponent";
import AchievementLayout from "layouts/AchievementLayout";
export default {
  name: "AchievementPage",
  components: {
    HeaderComponent,
    AchievementLayout,
  }
}
</script>

<style scoped>

</style>
