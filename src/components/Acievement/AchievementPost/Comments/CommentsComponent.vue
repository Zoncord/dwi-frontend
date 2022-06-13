<template>
  <div class="comments">
    <q-scroll-area class="comments__field column">
      <q-list class="comments__field__list">
        <InfiniteScroll :on-load-request="getComments">
          <CommentComponent v-for="comment in comments" :key="comment" :comment="comment"/>
        </InfiniteScroll>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
import CommentComponent from "components/Acievement/AchievementPost/Comments/Comment/CommentComponent";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";
import {mapGetters} from "vuex";
export default {
  name: "CommentsComponents",
  components: {
    CommentComponent,
    InfiniteScroll,
  },
  props: {
    parent: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getComments(index){
      await this.$axios.get(`${this.$dwiApi}blog/comment`, {
        headers: {
          Authorization: `Token ${this.token()}`
        },
        params: {
          post: this.parent.id,
          page: index,
        }
      }).then(res => {
        for (let commentData of res.data.results){
          this.comments.push(new this.$Comment(commentData))
        }
      })
    },
    addComment(comment){
      this.comments.push(comment)
    }
  },
  data() {
    return {
      comments: []
    }
  }
}
</script>

<style lang="scss" scoped>
.comments__field {
  height: 300px;
}

</style>
<style lang="scss">
.comments__field__input {
  .comment-input {
    flex-grow: 2;
  }
}
</style>
