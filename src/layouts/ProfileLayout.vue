<template>
<q-layout>
 <ProfileDescription
   :is-user-page="isUserPage"
   :is-subscribed="isSubscribed"
   :owner-name="userName"
   :followers-count="followersCount"
   :profile-description="profileDescription"
 />
  <div class="profile__cards-wrapper">
    <AddCard v-if="isUserPage"/>
    <DateCard
      v-for="dateCard in achievements"
      :key="dateCard"
      :ownerName="userName"
      :title="dateCard.title"
      :days="dateCard.days_since_the_last_incident"
      :user-image="userImage"
      :link="`achievement/${dateCard.id}`"
    />
  </div>
</q-layout>
</template>

<script>
import ProfileDescription from "components/Profile/ProfileDescription";
import AddCard from "components/Core/Cards/AddCard";
import DateCard from "components/Core/Cards/DateCard";

export default {
  name: "ProfileLayout",
  components: {
    ProfileDescription,
    AddCard,
    DateCard,
  },
  data(){
    this.$axios.get(this.$dwiApi + 'users/user/' + this.$route.params.userId).then(res => {
      console.log(res.data)
      this.userName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      this.followersCount = res.data.followers_count
      this.profileDescription = res.data.description
    }).catch(err => {
      console.log(err)
      if (err.request) {
        this.$router.push('/404')
      }
    })
    this.$axios.get(this.$dwiApi + 'achievements/achievement/?owners=' + this.$route.params.userId).then(res => {
      console.log(res.data)
      this.achievements = res.data.results
    })
    return {
      userName: null,
      userImage: null,
      isUserPage: this.$route.params.userId.toString() === this.$userId.toString(),
      isSubscribed: false,
      achievements: null,
      followersCount: null,
      profileDescription: null,
    }
  },

}
</script>

<style lang="scss">
.profile-description{
  margin-top: 40px;
  margin-bottom: 40px;
}
.profile__cards-wrapper{
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 1.33333%;
  grid-row-gap: 20px;
  margin-bottom: 20px;
}
.card{
  border-radius: 30px;
}
@media (max-width: 900px){
  .profile__cards-wrapper{
      grid-template-columns: repeat(3, 32%);
    grid-column-gap: 1.33%;
  }
}
@media (max-width: 768px){
  .profile__cards-wrapper{
      grid-template-columns: repeat(2, 49%);
    grid-column-gap: 2%;
  }
}
@media (max-width: 500px){
  .profile__cards-wrapper{
      display: flex;
      flex-direction: column;
    align-items: center;
  }
}

</style>
