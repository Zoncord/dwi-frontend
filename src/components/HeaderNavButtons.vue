<template>
  <div class="nav_buttons flex justify-between">
    <q-btn class="login">Log In</q-btn>
    <q-btn class="signup">Sign Up</q-btn>
  </div>
</template>

<script>
export default {
  name: "HeaderNavButtons"
}
</script>

<style lang="scss" scoped>
.nav_buttons{
  width: 16vw;
}
.q-btn{
  width: 48%;
  border-radius: 10px;
  font-size: 12px;
}
.login {
  color: black;
  background-color: white;

  //border-radius: 10px;
  //width: 75px;

}

.signup {
  color: white;
  background-color: black;

  //width: 75px;

}
</style>
