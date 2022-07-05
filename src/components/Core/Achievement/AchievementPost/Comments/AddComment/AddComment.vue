<template>
  <div class="add-comment flex items-center">
    <UserImage class="add-comment__user-image" :owner="this.$user"/>
    <CommentInput
      ref="commentInput"
      class="q-mx-md"
      v-model="commentText"
      @addComment="addComment"
    >
      <template v-slot:before>
        <div
          class="add-comment__reply-name-wrapper flex items-center no-wrap"
          @click="cancelReply"
          v-if="replying"
        >
          <p class="add-comment__reply-name-wrapper__name">
            To {{ this.$user.generalInfo.name }}
          </p>
          <q-icon name="close" class="add-comment__reply-name-wrapper__close"/>
        </div>
      </template>
    </CommentInput>
    <q-btn
      class="add-comment__button"
      text-color="$border-color"
      :disable="
        !this.commentText.split('\n').some((elem) => elem.split(' ').some((elem) => elem))
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
    async addComment() {
      let comment = await this.$Comment.build({ctx: this, text: this.commentText, post: this.parentPost.url})
      this.$emit('addComment', comment)
      this.commentText = ''
    },
    reply(user) {
      this.replying = true
      this.commentText = `${user.generalInfo.name}, ` + this.commentText
    },
    cancelReply() {
      this.replying = false
    },
    focus() {
      this.$refs.commentInput.focus()
    }
  },
  data() {
    return {
      replying: false,
      commentText: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.add-comment {
  flex-wrap: nowrap;

  .add-comment__user-image {
    width: 32px;
    height: 32px;
  }

  .add-comment__button {
    min-height: auto;
    height: 32px;
    padding: 0;
    border: none !important;
    color: #989898;
  }

  .add-comment__reply-name-wrapper {
    cursor: pointer;

    * {
      font-size: 15px;
      color: #8c8c8c;
    }
  }
}

</style>
