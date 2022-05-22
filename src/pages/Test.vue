<template>
<div class="">
  <EditableText v-model="a"/>
</div>
</template>

<script>
import EditableText from "components/Core/EditableText/EditableText";
export default {
  name: "Test",
  components: {
    EditableText,
  },
  data(){
    return {
      a: ''
    }
  },
  watch: {
    a(){
      console.log(this.a)
    }

  }
}
</script>

<style>
</style>
