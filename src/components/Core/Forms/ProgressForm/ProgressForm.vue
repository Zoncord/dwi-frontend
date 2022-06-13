<template>
  <q-form
    @validation-success="nextStage()"
    @submit.prevent=""
    class="progress-form flex column text-center"
  >
    <q-tab-panels v-model="activeStage" class="limiter">
      <q-tab-panel
        v-for="stage in stagesCount"
        :name="stage"
        :key="stage"
        :class="`stage${stage}-wrapper`"
      >
        <slot name="Title"/>
        <slot :name="'Stage' + stage"/>
      </q-tab-panel>
    </q-tab-panels>
    <ProgressFormBar
      v-model="activeStage"
      :stages-count="stagesCount"
      @finish="finish()"
    />
  </q-form>
</template>

<script>
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";

export default {
  name: "ProgressForm",
  components: {
    ProgressFormBar,
  },
  props: {
    stagesCount: {
      required: true,
    },
    modelValue: {},
  },
  data() {
    //TODO remake to class
    return {
      activeStage: this.modelValue,
    }
  },
  methods: {
    nextStage(){
        this.activeStage += 1
    },
    finish() {
      this.$emit('finish')
    }
  },
  computed: {},
  watch: {
    activeStage() {
      this.$emit('update:modelValue', this.activeStage)
    },
    modelValue() {
      this.activeStage = this.modelValue
    }
  },
}
</script>

<style lang="scss" scoped>
.progress-form {
  padding-bottom: 80px;
}
</style>
