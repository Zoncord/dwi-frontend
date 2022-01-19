<template>
  <div class="nav_buttons flex justify-between">
    <q-btn class="" :style="{'background-color': colors.login.bg, color: colors.login.text}">Log In</q-btn>
    <q-btn class="" :style="{'background-color': colors.signup.bg, color: colors.signup.text}">Sign Up</q-btn>
  </div>
</template>

<script>
export default {
  name: "HeaderNavButtons",
  props: {
    colors: {
      type: Object,
      default(){
        return {
          login: {
            bg: 'white',
            text: '#0B132B',
          },
          signup: {
            bg: '#0B132B',
            text: 'white',
          }
        }
      }
    }
  }
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
</style>
