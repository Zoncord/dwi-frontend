<template>
  <div class="search">
    <input type="text">
    <button @click="find">Поиск</button>
  </div>
</template>

<script>
export default {
  name: "Search",
  methods: {
    find(){
      alert('s')
    },
  }
}
</script>

<style lang="scss" scoped>
.search{
  width: 100%;
  height: 25px;
  input{
    width: 84%;
    height: 100%;
    outline: none;
    border:none;
    border-radius: 20px 0 0 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  button{
    width: 16%;
    height: 100%;
    border-radius: 0 20px 20px 0;
    background-color: $primary;
    color: white;
    border: none;
    &:hover{
      cursor: pointer;
      opacity: .8;
    }
    //background-color: red;
  }
  .q-btn{
    width: 20%;
    max-height: 100%;
    border-radius: 0 20px 20px 0;
  }
}


</style>
