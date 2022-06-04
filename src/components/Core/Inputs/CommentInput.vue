<template>
  <q-input
    borderless
    autogrow
    :placeholder="$t('createAchievement.firstStage.title') + ' *'"
    :maxlength="this.maxLength"
    :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
    class="title-input"
    v-model="title"
    :model-value="title"
  >
    <template v-slot:counter>
      <p class="text-input__chars-counter">
        {{ this.maxLength - title.length }}
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
      title: this.modelValue,
    }
  },
  watch: {
    title() {
      this.$emit('update:modelValue', this.title)
    },
    modelValue(){
      this.title = this.modelValue
    }
  }
}
</script>

<style scoped>

</style>
