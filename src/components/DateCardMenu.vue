<template>
  <div class="date_card_menu flex full-width">
    <q-btn class="btn_refresh" icon="cached" unelevated></q-btn>
    <q-btn class="btn_wysiwyg" icon="wysiwyg" unelevated></q-btn>
    <q-btn class="btn_settings" icon="settings" unelevated></q-btn>
    <q-btn class="btn_close" icon="close" unelevated></q-btn>
  </div>
</template>

<script>
export default {
  name: "DateCardMenu"
}
</script>

<style lang="scss" scoped>
.date_card_menu {
  height: 0;
  transition: .5s;
  overflow: hidden;
  //background-color: red;
}
</style>
