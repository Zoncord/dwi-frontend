<template>
  <div>
    <HeaderComponent/>
    <div class="limiter">
      <ExploreLayout/>
    </div>

  </div>
</template>

<script>
import ExploreLayout from "layouts/ExploreLayout";
import HeaderComponent from "components/Main/Header/HeaderComponent";
export default {
  name: "ExplorePage",
  components: {
    ExploreLayout,
    HeaderComponent,
  }
}
</script>

<style scoped>

</style>
