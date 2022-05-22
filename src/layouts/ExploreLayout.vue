<template>
  <q-layout class="flex q-mt-md">
    <DateCard
      v-for="achievement in achievements"
      :key="achievement"
      :url="achievement.url"
      :owner-url="achievement.ownerUrl"
    />
  </q-layout>
</template>

<script>
import DateCard from "components/Core/Cards/DateCard/DateCard";
import {mapGetters} from "vuex";

export default {
  name: "ExploreLayout",
  components: {
    DateCard,
  },
  methods: {
    ...mapGetters('mainStore', ['token'])
  },
  data() {
    this.$axios.get(this.$dwiApi + 'achievements/achievement', {
      params: {
        ordering: '-date_time_of_creation'
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
    return {
      achievements: []
    }
  }
}
</script>

<style lang="scss" scoped>
.q-layout{
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 1.33333%;
  grid-row-gap: 20px;
  margin-bottom: 20px;
}
.date-card {
  border-radius: 30px;
}
</style>
