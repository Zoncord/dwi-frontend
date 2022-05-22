<template>
  <p
    v-if="!isEditing"
    class="editable-text"
    @click="isEditing = true"
  >
    {{ text }}
    <q-icon class="editable-text__edit-icon" name="create"/>
  </p>
  <q-input
    v-if="isEditing"
    v-model="text"
    :model-value="text"
    borderless
    dense
    autofocus
    autogrow
    class="editable-text__input-wrapper"
    input-class="editable-text__wrapper__input"
  >
    <template v-slot:after>
      <q-icon name="check" class="editable-text__input__ready-icon" @click="finishEditing"/>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "EditableText",
  props: {
    modelValue: {},
  },
  methods: {
    finishEditing() {
      this.isEditing = false
      this.$emit('finishEditing')
    }
  },
  data() {
    return {
      text: this.modelValue,
      isEditing: false,
    }
  },
  watch: {
    text() {
      this.$emit('update:modelValue', this.text)
    },
    modelValue(){
      this.text = this.modelValue
    }
  }
}
</script>

<style lang="scss" scoped>
.editable-text {
  cursor: pointer;
  white-space: pre-line;
  line-height: 15px;

  .editable-text__edit-icon {
    opacity: 0;
    transition: opacity .3s;
  }

  &:hover .editable-text__edit-icon {
    opacity: 1;
  }
}

.editable-text__input__ready-icon {
  &:hover {
    color: $highlight;
    cursor: pointer;
  }

}

</style>
<style lang="scss">
.editable-text__input-wrapper{
  .q-field__control{
    .q-field__control-container{
      padding: 0 !important;
    }
  }
}
.editable-text__wrapper__input{
  line-height: 15px !important;
  padding: 0 !important;
  letter-spacing: normal;
}
</style>
