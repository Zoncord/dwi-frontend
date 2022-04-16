<template>
<div class="online-display">
  {{online ? "Online" : "Offline"}}
</div>
</template>

<script>
export default {
  name: "OnlineDisplay",
  data(){
    return {
      online: false,
    }
  }
}
</script>

<style scoped>

</style>
