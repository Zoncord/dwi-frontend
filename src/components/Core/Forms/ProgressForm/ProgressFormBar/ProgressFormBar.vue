<template>
  <div class="progress-form-bar">
    <q-linear-progress
      :value="progress"
      class="q-mt-md"
      color="highlight"
      size="3px"
      animation-speed="500"
    />
    <q-toolbar class="limiter progress-form-bar__toolbar row">
      <q-btn class="progress-form-bar__cancel-btn col-2 q-mr-md"
             no-caps
             @click="$router.go(-1)"
             :disable="isFinished"
      >
        {{ $t('progressFormBar.cancel') }}
      </q-btn>
      <q-btn class="progress-form-bar__back-btn col-2"
             no-caps
             @click="previousStage()"
             v-if="activeStage > 1"
             :disable="isFinished"
      >
        {{ $t('progressFormBar.back') }}
      </q-btn>
      <q-space/>
      <q-btn class="progress-form-bar__next-btn col-2"
             no-caps
             color="highlight"
             type="submit"
             v-if="activeStage < stagesCount"
      >
        {{ $t('progressFormBar.next') }}
      </q-btn>
      <q-btn class="progress-form-bar__next-btn col-2"
             no-caps
             color="highlight"
             @click="finish"
             v-else
             :disable="isFinished"
      >
        {{ $t('progressFormBar.finish') }}
      </q-btn>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: "ProgressForm",
  props: {
    stagesCount: {
      required: true,
    },
    fromSkipId: {
      default: null,
    },
    modelValue: {},
  },
  data() {
    return {
      activeStage: this.modelValue,
      isFinished: false,
    }
  },
  methods: {
    previousStage() {
      this.activeStage -= 1

    },
    finish() {
      this.isFinished = true
      this.activeStage += 1
      this.$emit('finish')
    }
  },
  computed: {
    progress() {
      return this.activeStage/ (this.stagesCount + 1)
    }
  },
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
.progress-form-bar {
  height: 80px;
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
}

.progress-form-bar__toolbar {
  height: 100%;
}
</style>

<style lang="scss">
.q-linear-progress__track {
  margin-top: auto;
  margin-bottom: auto;
  height: 0.5px;
  background-color: $border_color;
  opacity: 1;
}

.progress-form-bar {
  width: 100%;
  background-color: white;
}

.q-linear-progress {
  margin-top: 0;
}
</style>


