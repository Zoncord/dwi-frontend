<template>
  <q-input
    type="textarea"
    class="text-input"
    outlined
    :model-value="description"
    v-model="description"
    autogrow
    :maxlength="maxLength"
    :placeholder="$t('createAchievement.firstStage.description') + ' *'"
    :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
  >
    <template v-slot:append class="text-input__chars-counter">
      <p class="text-input__chars-counter">
        {{ maxLength - description.length }}
      </p>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {},
    maxLength: {
      default: 4096,
    }
  },
  data() {
    return {
      description: this.modelValue
    }
  },
  watch: {
    description(){
      this.$emit('update:modelValue', this.description)
    },
    modelValue(){
      this.description = this.modelValue
    }
  },
}
</script>

<style lang="scss">
.text-input {
  .q-field__control {
    min-height: 150px;
  }
}
</style>
