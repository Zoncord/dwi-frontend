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
      default: 256,
    },
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
