<template>
  <header class="items-center">
    <Logo :link="true"  color="purple" class="header__elem">DWI</Logo>
    <q-tabs
      v-model="tab"
      class="white"
    >
      <q-tab name="news" label="News" no-caps class="header__elem header__news-tab"></q-tab>
      <q-tab name="liked" label="Liked" no-caps class="header__elem header__liked-tab"/>
      <q-tab name="account" label="Account" no-caps class="header__elem header__account-tab"/>
    </q-tabs>
    <q-btn icon="search" color="white" text-color="black"></q-btn>
  </header>
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="news">
      <div class="text-h6">Mails</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="liked">
      <div class="text-h6">Alarms</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>

    <q-tab-panel name="account">
      <div class="text-h6">Movies</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </q-tab-panel>
  </q-tab-panels>

</template>

<script>
import Logo from "components/Core/Logo";
import {ref} from "vue";

export default {
  name: "Header",
  components: {
    Logo,
  },
  data() {
    return {
      tab: ref('news')
    }
  }
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 50px;
  display: flex;
}

.header__elem {
  background-color: white !important;
  color: black;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  .q-icon{
    font-size: 2em;
  }
}
.header__liked-tab{
  background-color: red;
  margin-left: 10px;
  margin-right: 10px;
}
.q-tab {
  //margin-right: 15px;
  min-height: auto;
  height: 40px;
  width: 33%;
}

//.q-tab__content {
//  z-index: 2;
//}

.q-tab--active {
  background-color: #9DACFF !important;
  color: white;
}

.q-tab__indicator {
  border-radius: 10px;
  background-color: #9DACFF !important;
  height: 100%;
  z-index: 1
}
.q-btn .header__elem{
  &:before{
     box-shadow: none;
   }
}

</style>
