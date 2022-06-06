<template>
  <UI>
    <FeedLayout/>
  </UI>
</template>

<script>
import FeedLayout from "layouts/FeedLayout";
import UI from "components/Ui/UI";

export default {
  name: "Main",
  components: {
    FeedLayout,

    UI,
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

