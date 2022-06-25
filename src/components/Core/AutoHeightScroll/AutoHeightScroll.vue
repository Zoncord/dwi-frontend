<template>
  <q-scroll-area
    class="comments__field column"
    :style="{
        height: contentHeight > 300 ? '300px' : contentHeight + 'px'
      }"
  >
    <q-list class="comments__field__list">
      <InfiniteScroll
        :on-load-request="onLoadRequest"
        ref="InfiniteScroll"
        v-model="isLoading"
        @changeContent="changeContent"
        :loading-spinner="false"
      >
        <div class="content-wrapper" ref="contentWrapper">
          <slot name="up"/>
          <slot ref="slot"/>
          <slot name="down"/>
          <div class="row justify-center q-py-md" v-if="isLoading">
            <q-spinner color="highlight" size="40px"/>
          </div>
        </div>
      </InfiniteScroll>

    </q-list>
  </q-scroll-area>
</template>

<script>
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";

export default {
  name: "AutoHeightScroll",
  components: {
    InfiniteScroll,
  },
  props: {
    onLoadRequest: {
      required: true,
    },
    modelValue: {}
  },
  methods: {
    async restart() {
      await this.$refs.InfiniteScroll.restart()
    },
    changeContent() {
      console.log('asdf')

    }
  },
  mounted() {
    setInterval(() => {
      // this.contentHeight = this.$refs.contentWrapper.clientHeight
    })
    this.slotObserver = new MutationObserver(function () {
      this.contentHeight = this.$refs.contentWrapper.clientHeight
    }.bind(this))

    this.slotObserver.observe(
      this.$refs.contentWrapper,
      {attributes: true, childList: true, characterData: true, subtree: true}
    )
  },
  beforeUnmount() {
    this.slotObserver.disconnect();
  },
  data() {
    setInterval(() => {
      // console.log(this.$refs.contentWrapper.children)
    }, 100)
    return {
      contentHeight: 0,
      isLoading: false,
      slotObserver: null,
    }
  },
  watch: {
    isLoading() {
      this.$emit('update:modelValue', this.isLoading)
      // this.contentHeight = this.$refs.contentWrapper.clientHeight + (this.$refs.InfiniteScroll.$el.children[1] ? this.$refs.InfiniteScroll.$el.children[1].clientHeight : 0)

      // this.contentHeight = this.$refs.contentWrapper.clientHeight
    },
  },
  computed: {
    // heightLocker(){
    //   return this.isLoading
    // }
  }
}
</script>

<style scoped>

</style>
