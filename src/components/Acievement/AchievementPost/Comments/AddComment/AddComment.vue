<template>
  <div class="add-comment flex">
    <UserImage class="add-comment__user-image" :url="this.$userImage"/>
    <CommentInput
      class="q-mx-md"
      v-model="comment"
    />
    <q-btn
      class="add-comment__button"
      text-color="$border-color"
      :disable="
        !this.comment.split('\n').some((elem) => elem.split(' ').some((elem) => elem))
      "
      icon="send"
      :ripple="false"
    />
  </div>
</template>

<script>

import UserImage from "components/Core/User/UserImage";
import CommentInput from "components/Core/Inputs/CommentInput";

export default {
  name: "AddComment",
  components: {
    CommentInput,
    UserImage,
  },
  props: {

  },
  data() {
    return {
      comment: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.add-comment{
  flex-wrap: nowrap;
}
.add-comment__user-image {
  width: 50px;
  height: 32px;
}

.add-comment__button {
  min-height: auto;
  height: 32px;
  padding: 0;
  border: none !important;
  color: #989898;
}
</style>
