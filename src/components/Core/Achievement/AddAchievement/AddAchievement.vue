<template>
<q-card class="add-card card flex justify-center items-center" @click="$router.push('/achievement/create')">
  <Plus></Plus>
</q-card>
</template>

<script>
import Plus from "components/Core/Plus/Plus";
export default {
  name: "AddCard",
  components: {
    Plus,
  }
}
</script>

<style scoped>
.add-card{
  max-width: 300px;
  width: 100%;
  height: 500px;
  cursor: pointer;
}
</style>
