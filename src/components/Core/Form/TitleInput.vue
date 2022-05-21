<template>
  <q-input
    @input="handleInput"
    outlined
    v-model="title"
    borderless
    :placeholder="$t('createAchievement.firstStage.title') + ' *'"
    :maxlength="this.maxLength"
    :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
    class="title-input"
    :model-value="title"
  >
    <template v-slot:append>
      <p class="title-input__chars-counter">
        {{ this.maxLength - title.length }}
      </p>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "TitleInput",
  props: {
    value: {},
    maxLength: {
      default: 256,
    }
  },
  data() {
    return {
      content: this.value,
      title: '',
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style lang="scss">
.title-input {

  .q-field__control {
    height: 40px;
  }

  .q-field__append {
    height: 40px;
  }
}
</style>
