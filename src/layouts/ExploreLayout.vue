<template>
  <q-layout class="q-mt-md">
    <InfiniteScroll class="" :on-load-request="getAchievements">
      <div class="date-cards-wrapper">
        <DateCard
          v-for="achievement in achievements"
          :key="achievement"
          :url="achievement.url"
          :owner-url="achievement.ownerUrl"
        />
      </div>
    </InfiniteScroll>
  </q-layout>
</template>

<script>
import DateCard from "components/Core/Cards/DateCard/DateCard";
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
      // console.log(this.achievements)
      await this.$axios.get(this.$dwiApi + 'achievements/achievement', {
        params: {
          ordering: '-date_time_of_creation',
          page: index
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        for (let achievement of res.data.results) {
          this.achievements.push({
            url: achievement.url,
            ownerUrl: achievement.owners[0],
          })
        }
      })
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
