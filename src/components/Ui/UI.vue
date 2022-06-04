<template>
  <div class="ui">
    <HeaderComponent v-if="header"/>
    <div
      class="ui__content"
      :class="{
          'pt56': header,
          'pb67': $q.screen.lt.md && footer,
      }"
    >
      <q-scroll-area class="ui__scroll">
        <div :class="{'limiter': limiter}">
            <slot/>
        </div>
      </q-scroll-area>
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
.ui{
  height: 100vh;
}
.ui__content {
  height: 100%;
}
.ui__scroll{
  height: 100%;
}
</style>
