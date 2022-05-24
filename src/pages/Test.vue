<template>
  <HeaderComponent/>
<div class="limiter">

  <ProfileDescription :owner-url="$dwiApi + ''"></ProfileDescription>
</div>
</template>

<script>
import AchievementPost from "components/Acievement/AchievementPost";
import HeaderComponent from "components/Main/Header/HeaderComponent";
import DateCard from "components/Core/Cards/DateCard/DateCard";
// import UserName from "components/Core/User/UserName";
import ProfileDescription from "components/Profile/ProfileDescription";
export default {
  name: "Test",
  components: {
    HeaderComponent,
    ProfileDescription,
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
