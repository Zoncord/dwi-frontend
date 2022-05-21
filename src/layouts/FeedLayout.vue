<template>
  <q-layout>
    <AchievementPost
      v-for="post in posts"
      :key="post"
      :url="post.url"
      :owner-url="post.ownerUrl"
    />
  </q-layout>
</template>

<script>
import AchievementPost from "components/Acievement/AchievementPost";
import {mapGetters} from "vuex";

export default {
  name: "FeedLayout",
  components: {
    AchievementPost
  },
  methods: {
    ...mapGetters('mainStore', ['token'])
  },
  data() {
    this.$axios.get(this.$dwiApi + 'blog/post', {
      params: {
        ordering: '-date_time_of_creation'
      },
      headers: {
        Authorization: `Token ${this.token()}`
      }
    }).then(res => {
      for (let post of res.data.results) {
        this.posts.push({
          url: post.url,
          ownerUrl: post.author,
        })
      }
    })
    return {
      posts: [],
    }
  },
}
</script>

<style scoped>

</style>
