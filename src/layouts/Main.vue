<template>
  <q-layout>
    <Header></Header>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="feed">
        <A></A>
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="explore">
        <B></B>
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-layout>
</template>

<script>
import Logo from "components/Logo";
import {ref} from "vue";
import UserName from "components/UserName";
import UserIcon from "components/UserImage";
import Header from "components/Main/Header/Header";

export default {
  name: "Main",
  components: {
    Header,
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.tab = toParams.id
      }
    )
  },
  data() {
    return {
      tab: this.$route.params.id,
    }
  },

}
</script>

<style lang="scss">
.q-tab-panels{
  position: static;
}
</style>
