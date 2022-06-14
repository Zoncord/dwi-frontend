<template>
  <div class="comments">
    <q-scroll-area
      class="comments__field column"
      :style="{
        height: commentsHeight > 300 ? '300px' : commentsHeight + 'px'
        }"
    >
      <q-list class="comments__field__list">
        <InfiniteScroll :on-load-request="getComments">
          <CommentComponent
            v-for="(comment, id) in comments"
            :key="comment"
            :comment="comment"
            :ref="'Comment' + comment.id + id"
            @deleteComment="deleteComment(id)"
          />
        </InfiniteScroll>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
import CommentComponent from "components/Core/Achievement/AchievementPost/Comments/Comment/CommentComponent";
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
    calcCommentsHeight() {
      let heightSum = 0
      for (let id in this.comments) {
        heightSum += this.$refs['Comment' + this.comments[id].id + id][0]['$el']['clientHeight']
      }
      return heightSum
    }
  },
  data() {
    return {
      commentsHeight: this.calcCommentsHeight(),
      comments: [],
    }
  },
  watch: {
    'comments.length': async function () {
      await this.$nextTick()
      this.commentsHeight = this.calcCommentsHeight()
      this.$emit('changeCommentsHeight', this.calcCommentsHeight())
    }
  }
}
</script>

<style lang="scss">
.comments__field__input {
  .comment-input {
    flex-grow: 2;
  }
}
</style>
