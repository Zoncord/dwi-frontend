<template>
  <div class="comments">
    <q-scroll-area class="comments__field column">
      <q-list class="comments__field__list">
        <InfiniteScroll :on-load-request="() => {this.comments.push(5)}">
          <CommentComponent v-for="comment in comments" :key="comment"/>
        </InfiniteScroll>
      </q-list>
    </q-scroll-area>
    <AddComment/>
  </div>
</template>

<script>
import CommentComponent from "components/Acievement/AchievementPost/Comments/Comment/CommentComponent";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";
import AddComment from "components/Acievement/AchievementPost/Comments/AddComment/AddComment";

export default {
  name: "CommentsComponents",
  components: {
    CommentComponent,
    InfiniteScroll,
    AddComment,
  },
  data() {
    return {
      comments: [1, 2, 3, 4, 5, 6]
    }
  }
}
</script>

<style lang="scss" scoped>
.comments{
  max-height: 350px;
  height: 100%;
}
.comments__field {
  //flex-grow: 2;
}

</style>
