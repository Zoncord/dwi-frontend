<template>
  <div class="comments">
    <q-scroll-area class="comments__field column">
      <q-list class="comments__field__list">
        <InfiniteScroll :on-load-request="() => {this.comments.push(5)}">
          <CommentComponent v-for="comment in comments" :key="comment"/>
        </InfiniteScroll>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
import CommentComponent from "components/Acievement/AchievementPost/Comments/Comment/CommentComponent";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";
export default {
  name: "CommentsComponents",
  components: {
    CommentComponent,
    InfiniteScroll,
    // AddComment,
  },
  data() {
    return {
      comments: [1, 2, 3, 4, 5, 6]
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
