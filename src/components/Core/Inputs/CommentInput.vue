<template>
  <q-input
    dense
    outlined
    autogrow
    :placeholder="$t('comment') + '...'"
    :maxlength="this.maxLength"
    class="comment-input"
    input-class="comment-input__input"
    v-model="comment"
    :model-value="comment"
    @keydown="inputHandler"
    ref="commentInput"
  >
    <template v-slot:append>
      <p class="text-input__chars-counter">
        {{ this.maxLength - comment.length }}
      </p>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "CommentInput",
  props: {
    modelValue: {},
    borderless: {
      default: false,
    },
    maxLength: {
      default: 4096,
    },
  },
  methods: {
    inputHandler(e) {
      if (this.$q.screen.gt.xs) {
        if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault()
          this.$emit('addComment')
        }
      }
    },
    focus(){
      this.$refs.commentInput.focus()
    }
  },
  data() {
    return {
      comment: this.modelValue,
    }
  },
  watch: {
    comment() {
      this.$emit('update:modelValue', this.comment)
    },
    modelValue(){
      this.comment = this.modelValue
    }
  }
}
</script>

<style lang="scss" scoped>
    .comment-input{
      padding-bottom: 0;
    }
</style>
