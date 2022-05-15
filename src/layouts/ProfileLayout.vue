<template>
  <q-layout>
    <ProfileDescription
      :owner-url="userUrl"
    />
    <div class="profile__cards-wrapper">
      <AddCard v-if="isUserPage"/>
      <DateCard
        v-for="dateCard in achievements"
        :key="dateCard"
        :owner-url="dateCard.owners[0]"
        :url="dateCard.url"
      />
    </div>
  </q-layout>
</template>

<script>
import ProfileDescription from "components/Profile/ProfileDescription";
import AddCard from "components/Core/Cards/AddCard";
import DateCard from "components/Core/Cards/DateCard";
import {mapGetters} from "vuex";

export default {
  name: "ProfileLayout",
  components: {
    ProfileDescription,
    AddCard,
    DateCard,
  },
  methods: {
    ...mapGetters('mainStore', ['token'])
  },
  data() {
    this.$axios.get(this.$dwiApi + 'users/user/' + this.$route.params.userId).then(res => {
      this.userName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      this.userUrl = res.data.url
      this.followersCount = res.data.followers_count
      this.profileDescription = res.data.description
    }, {
      headers: {
        Authorization: 'Token ' + this.token()
      }
    }).catch(err => {
      console.log(err)
      if (err.request) {
        this.$router.push('/404')
      }
    })
    this.$axios.get(this.$dwiApi + 'achievements/achievement/?owners=' + this.$route.params.userId).then(res => {
      this.achievements = res.data.results
    })
    return {
      userName: null,
      userImage: null,
      userUrl: null,
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
.profile-description {
  margin-top: 40px;
  margin-bottom: 40px;
}

.profile__cards-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 1.33333%;
  grid-row-gap: 20px;
  margin-bottom: 20px;
}

.card {
  border-radius: 30px;
}

@media (max-width: 900px) {
  .profile__cards-wrapper {
    grid-template-columns: repeat(3, 32%);
    grid-column-gap: 1.33%;
  }
}

@media (max-width: 768px) {
  .profile__cards-wrapper {
    grid-template-columns: repeat(2, 49%);
    grid-column-gap: 2%;
  }
}

@media (max-width: 500px) {
  .profile__cards-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

</style>
