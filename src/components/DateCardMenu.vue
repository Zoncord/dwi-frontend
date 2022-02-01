<template>
  <div class="date-card-menu flex full-width">
    <q-btn class="btn-refresh" icon="cached" unelevated></q-btn>
    <q-btn class="btn-wysiwyg" icon="wysiwyg" unelevated></q-btn>
    <q-btn class="btn-settings" icon="settings" unelevated></q-btn>
    <q-btn class="btn-close" icon="close" unelevated></q-btn>
  </div>
</template>

<script>
export default {
  name: "DateCardMenu"
}
</script>

<style lang="scss" scoped>
.date-card-menu {
  height: 0;
  transition: .5s;
  overflow: hidden;
  width: 100%;
  //background-color: red;
  border-radius: 10px !important;

  //background-color: red;
  *{
    flex-grow: 1;
    border-radius: 0;
  }
}
</style>
