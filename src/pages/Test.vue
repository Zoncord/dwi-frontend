<template>
<div class="">
  <ProfileDescription :owner-url="'https://dwi-api.zoncord.tech/users/user/1/'"></ProfileDescription>
  <DateCard owner-url="https://dwi-api.zoncord.tech/users/user/1/"></DateCard>
</div>
</template>

<script>
import ProfileDescription from "components/Profile/ProfileDescription";
import DateCard from "components/Core/Cards/DateCard/DateCard";
export default {
  name: "Test",
  components: {
    ProfileDescription,
    DateCard,
  },
  data(){
    this.$axios.get(this.$dwiApi + 'users/user/1').then(res => {
      console.log(res)
    }).catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    return {

    }
  }
}
</script>

<style scoped>

</style>
