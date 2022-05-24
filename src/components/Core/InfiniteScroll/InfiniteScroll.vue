<template>
  <q-infinite-scroll class="infinite-scroll flex column" @load="handleLoad" :disable="disable">
    <slot/>
    <template class="infinite-scroll__spinner" v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner color="highlight" size="40px"/>
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script>
export default {
  name: "InfiniteScroll",
  props: {
    onLoadRequest: {
      required: true,
    },
  },
  methods: {
    async handleLoad(index, done) {
      try {
        await this.onLoadRequest(index)
        done()
      } catch (err){
        if (err.response && err.response.status === 404){
          this.disable = true
        }
      }
    }
  },
  data() {
    return {
      isStopped: true,
      disable: false
    }
  },
}
</script>

<style lang="scss" scoped>
.infinite-scroll {
  width: 100%;
  display: flex;
  justify-content: center;
}

.infinite-scroll__spinner {

}
</style>
