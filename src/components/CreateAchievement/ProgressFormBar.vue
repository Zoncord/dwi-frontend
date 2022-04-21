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
             @click="$router.push('/profile')"
      >
        {{ $t('progressFormBar.cancel') }}
      </q-btn>
      <q-btn class="progress-form-bar__back-btn col-2"
             no-caps
             @click="$emit('previousStage')"
      >
        {{ $t('progressFormBar.back') }}
      </q-btn>
      <q-space/>
      <q-btn class="progress-form-bar__next-btn col-2"
             no-caps
             color="highlight"
             type="submit"
             v-if="activeStage !== stagesCount"
      >
        {{ $t('progressFormBar.next') }}
      </q-btn>
      <q-btn class="progress-form-bar__next-btn col-2"
             no-caps
             color="highlight"
             @click="$emit('finish')"
             v-else
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
    activeStage: {
      required: true,
    },
    fromSkipId: {
      default: null,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    progress(){
      return this.activeStage/  this.stagesCount
    }
  }
}
</script>
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


<style lang="scss" scoped>
.progress-form-bar {
  height: 80px;
}

.progress-form-bar__toolbar {
  height: 100%;
}
</style>
