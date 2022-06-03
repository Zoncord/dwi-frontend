<template>
  <div class="user-name">
    <p :class="nameClass" v-if="name">
      {{ name }}
    </p>

    <div class="user-name__skeleton-wrapper flex" v-else>
      <q-skeleton class="user-name__skeleton-wrapper__item" :style="{'margin-right': `${height / 2}px`}" :width="`${width}px`" :height="`${this.height}px`"/>
      <q-skeleton class="user-name__skeleton-wrapper__item" :width="`${width}px`" :height="`${height}px`"/>
    </div>
  </div>


</template>

<script>
export default {
  name: "UserName",
  props: {
    name: {},
    nameClass: {},
    skeletonScale: {
      default: 1
    }
  },
  data(){
    return {
      width: 100 * this.skeletonScale,
      height: 20 * this.skeletonScale
    }
  },
}
</script>

<style scoped>
/*.user-name__skeleton-wrapper{*/
/*  flex-wrap: nowrap;*/
/*}*/
</style>
