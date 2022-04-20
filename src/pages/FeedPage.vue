<template>
  <div>
    <Header/>
    <div class="limiter">
      <FeedLayout/>
    </div>

  </div>
</template>

<script>
import Header from "components/Main/Header/HeaderComponent";
import FeedLayout from "layouts/FeedLayout";

export default {
  name: "Main",
  components: {
    Header,
    FeedLayout,
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        this.tab = toParams.id
      }
    )
  },
  data() {
    return {
      tab: this.$route.params.id,
    }
  },

}
</script>
<style lang="scss">
.q-tab-panels {
  position: static;
}

.q-layout {
  overflow-x: hidden;
}
</style>

