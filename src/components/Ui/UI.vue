<template>
  <div class="ui">
    <HeaderComponent v-if="header"/>
    <div class="ui__content"
         :class="{
            'limiter': limiter,
          }"
    >
      <slot/>
    </div>
    <FooterNavigation v-if="$q.screen.lt.md && footer"/>
  </div>
</template>

<script>
import HeaderComponent from "components/Main/Header/HeaderComponent";
import FooterNavigation from "components/Ui/FooterNavigation/FooterNavigation";

export default {
  name: "UI",
  components: {
    HeaderComponent,
    FooterNavigation
  },
  props: {
    header: {
      default: true,
    },
    footer: {
      default: true,
    },
    limiter: {
      default: true,
    }
  }
}
</script>

<style scoped>
.ui__content {
  padding-top: 55px;
  padding-bottom: 67px;
}
</style>
