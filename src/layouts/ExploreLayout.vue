<template>
  <q-layout class="q-mt-md">
    <InfiniteScroll class="" :on-load-request="getAchievements">
      <div class="date-cards-wrapper">
        <DateCard
          v-for="(achievement, id) in achievements"
          :key="achievement"
          :achievement="achievement"
          @deleteAchievement="deleteAchievement(id)"
        />
      </div>
    </InfiniteScroll>
  </q-layout>
</template>

<script>
import DateCard from "components/Core/Achievement/AchievementCard";
import {mapGetters} from "vuex";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";

export default {
  name: "ExploreLayout",
  components: {
    DateCard,
    InfiniteScroll,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getAchievements(index) {
      await this.$axios.get(this.$dwiApi + 'achievements/achievement', {
        params: {
          ordering: '-date_time_of_creation',
          page: index
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        for (let achievementData of res.data.results) {
          this.achievements.push(new this.$Achievement(achievementData))
        }
      })
    },
    deleteAchievement(id){
      this.achievements.splice(id, 1)
    }
  },
  data() {
    return {
      achievements: []
    }
  }
}
</script>

<style lang="scss" scoped>
.date-cards-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 1.33333%;
  grid-row-gap: 20px;
  margin-bottom: 20px;
}
@media(max-width: 1024px){
  .date-cards-wrapper{
    grid-template-columns: repeat(3, 32%);
    grid-column-gap: 2%;
  }
}
@media(max-width: 800px){
  .date-cards-wrapper{
    grid-template-columns: repeat(2, 49%);
    grid-column-gap: 2%;
  }
}@media(max-width: 600px){
  .date-cards-wrapper{
    grid-template-columns: repeat(1, 100%);
    grid-column-gap: 0;
  }
}

.date-card {
  border-radius: 30px;
}
</style>
