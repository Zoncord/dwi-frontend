<template>
  <q-layout>
    <ProfileDescription
      :owner="owner"
    />
    <InfiniteScroll :on-load-request="getAchievements">
      <div class="profile__cards-wrapper">
        <AddCard v-if="this.$.vnode.key.toString() === this.$user.id.toString()"/>
        <DateCard
          v-for="achievement in achievements"
          :key="achievement"
          :achievement="achievement"
        />
      </div>
    </InfiniteScroll>
  </q-layout>
</template>

<script>
import ProfileDescription from "components/Profile/ProfileDescription/ProfileDescription";
import AddCard from "components/Core/Achievement/AddAchievement/AddAchievement";
import DateCard from "components/Core/Achievement/AchievementCard";
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
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getAchievements(index) {
      await this.$axios.get(this.$dwiApi + 'achievements/achievement/', {
        params: {
          owners: this.$.vnode.key,
          page: index,
        }
      }).then(res => {
        for (let achievementData of res.data.results) {
          this.achievements.push(new this.$Achievement(this, achievementData))
        }
      })
    },
    getUser() {
      this.$axios.get(`${this.$dwiApi}users/user/${this.$.vnode.key}`, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.owner = new this.$User(res.data)
      })
    }
  },
  data() {
    this.getUser()
    return {
      owner: new this.$User({}),
      achievements: [],
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
