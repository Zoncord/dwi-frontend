<template>
    <q-infinite-scroll class="infinite-scroll flex column" @load="handleLoad" ref="InfiniteScroll">
      <slot/>
      <template class="infinite-scroll__spinner" v-if="loadingSpinner" v-slot:loading>
        <div class="row justify-center q-py-md">
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
    modelValue: {},
    loadingSpinner: {
      default: true,
    }
  },
  methods: {
    async handleLoad(index, done) {
      this.handlingLoad = true
      try {
        await this.onLoadRequest(index).then(res => {
            if (res.data.next){
              done()
            }
            else{
              done(true)
            }
        })
        done()
      } catch (err) {
        if (err.response && err.response.status === 404) {
          done(true)
        }
      }
      this.handlingLoad = false
    },
    async restart(){
      this.$emit('changeContent')
      this.$refs.InfiniteScroll.reset()
      this.$refs.InfiniteScroll.resume()
      this.$refs.InfiniteScroll.poll()
    },
  },
  data(){
    return {
      handlingLoad: false,
    }
  },
  watch: {
    handlingLoad(){
      this.$emit('update:modelValue', this.handlingLoad)
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
