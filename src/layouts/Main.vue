<template>
  <q-layout>
    <Header></Header>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="feed">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="explore">
        <div class="text-h6">Alarms</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-layout>
</template>

<script>
import Header from "components/Main/Header/HeaderElement";

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
