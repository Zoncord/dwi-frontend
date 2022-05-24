<template>
<div>
  <q-skeleton
    v-for="word in skeletonWords"
    :key="word"
    :width="`${word}px`"
    class="inline-block q-mr-sm"
    :height="`${wordHeight}px`"
  />
</div>
</template>

<script>
export default {
  name: "RandomSkeletonDescription",
  props: {
    maxLength: {
      default: 120
    },
    minLength: {
      default: 20
    },
    maxWordWidth: {
      default: 120,
    },
    minWordWidth: {
      default: 20
    },
    wordHeight: {
      default: 20
    }
  },
  methods: {
    getSkeletonWordsArray() {
      let array = []
      for (let i = 0; i < Math.random() * (this.maxLength - this.minLength) + this.minLength; i++) {
        array.push(Math.random() * (this.maxWordWidth - this.minWordWidth) + this.minWordWidth)
      }
      return array
    }
  },
  data(){
    return {
      skeletonWords: this.getSkeletonWordsArray(),
    }
  }
}
</script>

<style scoped>

</style>
