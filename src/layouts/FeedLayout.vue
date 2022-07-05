<template>
  <q-layout>
    <div class="q-mt-md">
      <InfiniteScroll :on-load-request="getPosts">
        <AchievementPost
          v-for="(post, id) in posts"
          :key="post"
          :post="post"
          :to-achievement="true"
          @deletePost="deletePost(id)"
        />
      </InfiniteScroll>
    </div>
  </q-layout>
</template>

<script>
import AchievementPost from "components/Core/Achievement/AchievementPost/AchievementPost";
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
      return await this.$axios.get(this.$dwiApi + 'blog/post', {
        params: {
          ordering: '-date_of_creation',
          page: index,
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        for (let postData of res.data.results) {
          this.posts.push(new this.$Post(postData))
        }
        return res
      })
    },
    deletePost(id){
      this.posts.splice(id, 1)
    }
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
