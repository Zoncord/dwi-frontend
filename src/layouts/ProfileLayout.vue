<template>
  <q-layout>
    <ProfileDescription
      :owner-url="userUrl"
    />
      <InfiniteScroll :on-load-request="getAchievements">
        <div class="profile__cards-wrapper">
          <AddCard v-if="isUserPage"/>
          <DateCard
            v-for="dateCard in achievements"
            :key="dateCard"
            :owner-url="dateCard.owners[0]"
            :url="dateCard.url"
          />
        </div>
      </InfiniteScroll>
  </q-layout>
</template>

<script>
import ProfileDescription from "components/Profile/ProfileDescription";
import AddCard from "components/Core/Cards/AddCard";
import DateCard from "components/Core/Cards/DateCard/DateCard";
import {mapGetters} from "vuex";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";

export default {
  name: "ProfileLayout",
  components: {
    ProfileDescription,
    AddCard,
    DateCard,
    InfiniteScroll,
  },
  props: {
    userId: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getAchievements(index){
      await this.$axios.get(this.$dwiApi + 'achievements/achievement/', {
        params: {
          owners: this.userId,
          page: index,
        }
      }).then(res => {
        this.achievements = res.data.results
      })
    },
    getUserData(){
      this.$axios.get(this.$dwiApi + 'users/user/' + this.userId, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.userName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
        this.userUrl = res.data.url
        this.followersCount = res.data.followers_count
        this.profileDescription = res.data.description
      })
    }
  },
  data() {
    this.getUserData()
    return {
      userName: null,
      userImage: null,
      userUrl: null,
      isUserPage: this.userId.toString() === this.$userId.toString(),
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
