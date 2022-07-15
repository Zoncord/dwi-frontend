<template>
  <div class="add-comment flex items-center">
    <UserImage class="add-comment__user-image" :owner="this.$user"/>
    <CommentInput
      ref="commentInput"
      class="q-mx-md"
      :class="{'column': this.$q.screen.lt.sm}"
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
            {{ `${this.$t('to')} ${this.$user.generalInfo.name}` }}
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
      let comment = await this.$Comment.build({
        ctx: this,
        text: this.commentText,
        parent: this.parentPost ? this.parentPost.url : this.comment
      })
      this.$emit('addComment', comment)
      this.commentText = ''
      this.replying = false
      this.comment = null
    },
    async reply(comment) {
      this.replying = true
      this.comment = comment
    },
    cancelReply() {
      this.replying = false
      this.comment = null
    },
    focus() {
      this.$refs.commentInput.focus()
    }
  },
  data() {
    return {
      replying: false,
      comment: null,
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
