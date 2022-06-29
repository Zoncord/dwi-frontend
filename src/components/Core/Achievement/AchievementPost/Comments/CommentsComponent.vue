<template>
  <div class="comments">
    <AutoHeightScroll
      class="comments__field"
      :on-load-request="getComments"
    >
      <CommentComponent
        v-for="(comment, id) in comments"
        :key="comment"
        :comment="comment"
        :ref="'Comment' + comment.id + id"
        @deleteComment="deleteComment(id)"
      />
    </AutoHeightScroll>
  </div>
</template>

<script>
import CommentComponent from "components/Core/Achievement/AchievementPost/Comments/Comment/CommentComponent";
import {mapGetters} from "vuex";
import AutoHeightScroll from "components/Core/AutoHeightScroll/AutoHeightScroll";

export default {
  name: "CommentsComponents",
  components: {
    CommentComponent,
    AutoHeightScroll,
  },
  props: {
    parent: {
      required: true,
    },
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getComments(index) {
      await this.$axios.get(`${this.$dwiApi}blog/comment`, {
        headers: {
          Authorization: `Token ${this.token()}`
        },
        params: {
          post: this.parent.id,
          page: index,
        }
      }).then(res => {
        for (let commentData of res.data.results) {
          this.comments.push(new this.$Comment(commentData))
        }
      })
    },
    addComment(comment) {
      this.comments.push(comment)
    },
    deleteComment(id) {
      this.comments.splice(id, 1)
    },
  },
  data() {
    return {
      comments: [],
    }
  },
}
</script>

<style lang="scss">
.comments__field__input {
  .comment-input {
    flex-grow: 2;
  }
}
</style>
