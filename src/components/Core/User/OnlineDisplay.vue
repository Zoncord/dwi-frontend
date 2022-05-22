<template>
<div class="online-display">
  {{online ? $t('header.userEntryMenu.online') : $t('header.userEntryMenu.offline')}}
</div>
</template>

<script>
export default {
  name: "OnlineDisplay",
  data(){
    return {
      online: true,
    }
  }
}
</script>

<style scoped>

</style>
