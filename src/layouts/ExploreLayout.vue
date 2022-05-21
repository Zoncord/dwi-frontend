<template>
  <q-layout class="flex">
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
      console.log(res.data)
    })
    return {
      achievements: []
    }
  }
}
</script>

<style scoped>

</style>
