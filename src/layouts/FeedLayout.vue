<template>
  <q-layout>
    <div class="q-mt-md">
      <InfiniteScroll :on-load-request="getPosts">
        <AchievementPost
          v-for="post in posts"
          :key="post"
          :url="post.url"
          :owner-url="post.ownerUrl"
        />
      </InfiniteScroll>
    </div>
  </q-layout>
</template>

<script>
import AchievementPost from "components/Acievement/AchievementPost/AchievementPost";
import {mapGetters} from "vuex";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";

export default {
  name: "FeedLayout",
  components: {
    AchievementPost,
    InfiniteScroll,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getPosts(index) {
      await this.$axios.get(this.$dwiApi + 'blog/post', {
        params: {
          ordering: '-date_of_creation',
          page: index,
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
    },
  },
  data() {
    return {
      posts: [],
    }
  },
}
</script>

<style scoped>

</style>
