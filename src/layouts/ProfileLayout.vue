<template>
<q-layout>
 <ProfileDescription :is-user-page="isUserPage" :is-subscribed="isSubscribed"/>
  <div class="profile__cards-wrapper">
    <AddCard v-if="isUserPage"/>
    <DateCard
      v-for="dateCard in dateCards"
      :key="dateCard"
      :ownerName="userName"
      :title="dateCard.title"
      :days="dateCard.days"
      :days-unit="dateCard.daysUnit"
      :user-image="dateCard.userImage"
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
    return {
      isUserPage: true,
      isSubscribed: false,
      dateCards: [
        {
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
        },
        {
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
        },
        {
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
          }, {
            title: 'Делает деньги',
            days: 3,
            daysUnit: 'дня',
            userImage:  '',
          },{
            title: 'Делает деньги',
            days: 3,
            daysUnit: 'дня',
            userImage:  '',
          },

      ]
    }
  },
  computed: {
    userName(){
      return this.$userName
    }
  }

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
