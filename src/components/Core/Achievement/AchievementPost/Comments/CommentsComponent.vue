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
        @reply="reply"
      />
    </AutoHeightScroll>
    <q-separator/>
    <AddComment
      class="achievement__blog__post__add-comment q-mx-lg q-my-md"
      :parent-post="parent"
      @addComment="addComment"
      @cancelReply="cancelReply"
      ref="addComment"
    />
  </div>
</template>

<script>
import CommentComponent from "components/Core/Achievement/AchievementPost/Comments/Comment/CommentComponent";
import {mapGetters} from "vuex";
import AutoHeightScroll from "components/Core/AutoHeightScroll/AutoHeightScroll";
import AddComment from "components/Core/Achievement/AchievementPost/Comments/AddComment/AddComment";

export default {
  name: "CommentsComponents",
  components: {
    CommentComponent,
    AutoHeightScroll,
    AddComment,
  },
  props: {
    parent: {
      required: true,
    },
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getReplies(commentUrl) {

      let comment = await this.$Comment.build({ctx: this, url: commentUrl})

      this.comments.push(comment)
      for (let i in comment.answers) {

        await this.getReplies(comment.answers[i])
      }
    },
    async getComments(index) {
      return await this.$axios.get(`${this.$dwiApi}blog/comment`, {
        headers: {
          Authorization: `Token ${this.token()}`
        },
        params: {
          post: this.parent.id,
          page: index,
        }
      }).then(async res => {
        let commentsData = Object.values(res.data.results)
        // console.log(commentsData)
        for (let commentId in commentsData) {
          commentsData[commentId]['ctx'] = this
          // this.comments.push(await this.$Comment.build(commentsData[commentId]))
          await this.getReplies(commentsData[commentId].url)
        }
        return res
      })
    },
    addComment(comment) {
      this.comments.push(comment)
    },
    deleteComment(id) {
      this.comments.splice(id, 1)
    },
    reply(comment) {
      this.$refs.addComment.reply(comment)
      this.$refs.addComment.focus()
    },
    cancelReply() {

    }
  },
  data() {
    return {
      comments: [],
      replying: false,
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
