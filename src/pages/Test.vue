<template>
  <UI :footer="false">
    <TestLayout/>
  </UI>

</template>

<script>
import UI from "components/Ui/UI";
import TestLayout from "layouts/TestLayout";

export default {
  name: "Test",
  components: {
    UI,
    TestLayout,
  },
}
</script>

<style scoped>

</style>
