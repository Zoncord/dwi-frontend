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
  },
  mounted() {
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
    return {
      contentHeight: 0,
      isLoading: false,
      slotObserver: null,
    }
  },
  watch: {
    isLoading() {
      this.$emit('update:modelValue', this.isLoading)
    },
  },
}
</script>

<style scoped>

</style>
