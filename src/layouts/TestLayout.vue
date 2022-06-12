<template>
<div class="">

</div>
</template>

<script>
export default {
  name: "TestLayout",
  data(){
    class A{
      constructor(props) {
       this.b = props.asdf
      }
    }
    let a = new A({})
    console.log(a.b)
    return {

    }
  }
}
</script>

<style scoped>

</style>
