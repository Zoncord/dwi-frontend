<template>
  <p
    v-if="!isEditing"
    class="editable-text flex"
    @click="isEditing = true"
  >
    <slot name="nullDescription" v-if="!text || text.length === 0"/>
    <span v-else>{{ text }}</span>
    <q-icon
      :class="{
      'editable-text__edit-icon-hover': $q.screen.gt.sm
    }"
      name="create"
    />
  </p>
  <q-input
    v-else
    v-model="text"
    :model-value="text"
    borderless
    dense
    autofocus
    autogrow
    class="editable-text__input-wrapper"
    :input-class="`editable-text__wrapper__input ${inputClass}`"
    @keydown="inputHandler"
    bottom-slots
    :maxlength="maxLength"
  >
    <template v-slot:counter class="text-input__chars-counter">
      <p class="text-input__chars-counter">
        {{ maxLength - text.length }}
      </p>
    </template>

    <template v-slot:hint v-if="this.$q.screen.lt.sm">
      <q-icon name="check" class="editable-text__input__ready-icon" @click="finishEditing"/>
    </template>
  </q-input>
</template>

<script>
export default {
  name: "EditableText",
  props: {
    modelValue: {},
    maxLength: {
      default: 4096,
    },
    inputClass: {
      default: '',
    }
  },
  methods: {
    finishEditing() {
      this.isEditing = false
      this.$emit('finishEditing')
    },
    inputHandler(e) {
      if (this.$q.screen.gt.xs) {
        if (e.keyCode === 13 && !e.shiftKey) {
          e.preventDefault()
          this.finishEditing()
        }
      }
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
    modelValue() {
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
  min-height: 15px;
  word-break: break-word;

  .editable-text__edit-icon-hover {
    opacity: 0;
    transition: opacity .3s;
  }

  &:hover .editable-text__edit-icon-hover {
    opacity: 1;
  }
}

.editable-text__input__ready-icon {
  font-size: 30px;

  &:hover {
    color: $highlight;
    cursor: pointer;
  }

}

</style>
<style lang="scss">
.editable-text__input-wrapper {
  .q-field__control {
    .q-field__control-container {
      padding: 0 !important;
    }
  }
}

.editable-text__wrapper__input {
  line-height: 15px !important;
  padding: 0 !important;
  letter-spacing: normal;
}

</style>
