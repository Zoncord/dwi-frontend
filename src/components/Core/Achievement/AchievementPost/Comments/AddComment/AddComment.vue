<template>
  <div class="add-comment flex">
    <UserImage class="add-comment__user-image" :owner="this.$user"/>
    <CommentInput
      ref="commentInput"
      class="q-mx-md"
      v-model="comment"
      @addComment="addComment"
    />
    <q-btn
      class="add-comment__button"
      text-color="$border-color"
      :disable="
        !this.comment.split('\n').some((elem) => elem.split(' ').some((elem) => elem))
      "
      icon="send"
      :ripple="false"
      @click="addComment"
    />
  </div>
</template>

<script>

import UserImage from "components/Core/User/UserImage";
import CommentInput from "components/Core/Inputs/CommentInput";
import {mapGetters} from "vuex";

export default {
  name: "AddComment",
  components: {
    CommentInput,
    UserImage,
  },
  props: {
    parentPost: {
      required: true,
    }
  },
  methods: {
    ...mapGetters("mainStore", ["token"]),
    addComment(){
      this.$axios.post(`${this.$dwiApi}blog/comment/`, {
        text: this.comment,
        post: this.parentPost.url,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.$emit('addComment', new this.$Comment(res.data))
        this.comment = ''
      })
    },
    reply(user){
      this.comment = `${user.generalInfo.name}, ` + this.comment
    },
    focus(){
      this.$refs.commentInput.focus()
    }
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
