<template>
  <div class="date-card-menu flex full-width">
    <q-btn class="btn-refresh" icon="cached" :disabled="disabled" unelevated></q-btn>
    <q-btn class="btn-wysiwyg" icon="wysiwyg" :disabled="disabled" unelevated></q-btn>
    <q-btn class="btn-settings" icon="settings" :disabled="disabled" unelevated></q-btn>
    <q-btn class="btn-close" icon="close" :disabled="disabled" unelevated></q-btn>
  </div>
</template>

<script>
export default {
  name: "DateCardMenu",
  props: {
    disabled: {
      default: true,
    }
  }
}
</script>

<style lang="scss" >
.date-card-menu {
  height: 0;
  transition: .5s;
  overflow: hidden;
  width: 100%;
  //background-color: red;
  border-radius: 20px !important;
  .q-btn{
    width: 25%;
    border-radius: 0;
    opacity: 1 !important;
    .q-icon{
      font-size: 25px !important;
    }
  }

}

</style>
