<template>
<q-layout>
 <ProfileDescription/>
  <div class="profile__cards-wrapper">
    <AddCard/>
    <DateCard
      v-for="dateCard in dateCards"
      :key="dateCard"
      :name="dateCard.name"
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
      dateCards: [
        {
          name: 'Michael L.',
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
        },
        {
          name: 'Michael L.',
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
        },
        {
          name: 'Michael L.',
          title: 'Делает деньги',
          days: 3,
          daysUnit: 'дня',
          userImage:  '',
          }, {
            name: 'Michael L.',
            title: 'Делает деньги',
            days: 3,
            daysUnit: 'дня',
            userImage:  '',
          },{
            name: 'Michael L.',
            title: 'Делает деньги',
            days: 3,
            daysUnit: 'дня',
            userImage:  '',
          },

      ]
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
}
.card{
  border-radius: 30px;
}

</style>
