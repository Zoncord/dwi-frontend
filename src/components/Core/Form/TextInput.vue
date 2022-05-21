<template>
  <q-input
    @input="handleInput"
    type="textarea"
    class="create-post__fist-stage__description-input"
    outlined
    v-model="description"
    :model-value="description"
    autogrow
    maxlength="4096"
    :placeholder="$t('createAchievement.firstStage.description') + ' *'"
    :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
  >
    <template v-slot:append class="title-input__chars-counter create-achievement__input">
      <p class="title-input__chars-counter">
        {{ 4096 - description.length }}
      </p>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: {},
    maxLength: {
      default: 256,
    }
  },
  data(){
    return {
      description: ''
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style scoped>

</style>
