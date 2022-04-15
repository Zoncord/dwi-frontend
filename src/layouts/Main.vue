<template>
  <q-layout>
    <Header></Header>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="feed">
        <div class="text-h6">Mails</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>

      <q-tab-panel name="recommendations">
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
import UserIcon from "components/UserIcon";
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

//.limiter {
//  //height: 100%;
//  //height: 40px;
//  //padding-top: 10px;
//  //padding-bottom: 10px;
//}
//

//
//.q-tabs {
//  height: 100%;
//}
//

//.q-tab__indicator{
//  height: 3px !important  ;
//}
//
//.search {
//  flex-grow: 4;
//}
//
//.q-input {
//  height: 40px;
//}

</style>
