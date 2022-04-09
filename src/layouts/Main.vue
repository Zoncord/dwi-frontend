<template>
  <Grid/>

  <q-layout class="wrapper">
    <div class="limiter">
      <header class="items-center">
        <Logo :link="true" color="purple" class="header__elem">DWI</Logo>
        <q-tabs
          v-model="tab"
          class="white"
        >
          <q-tab name="news" label="News" no-caps class="header__elem header__news-tab"></q-tab>
          <q-tab name="liked" label="Liked" no-caps class="header__elem header__liked-tab"/>
          <q-tab name="account" label="Account" no-caps class="header__elem header__account-tab"/>

        </q-tabs>
        <FindButton class="header__elem"/>
      </header>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="news">
          <News/>
        </q-tab-panel>

        <q-tab-panel name="liked">

        </q-tab-panel>

        <q-tab-panel name="account">

        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-layout>
</template>

<script>
import Grid from "components/Grid";
import {ref} from "vue";
import Logo from "components/Logo";
import News from "layouts/News";
import FindButton from "components/FindButton";

export default {
  name: "Main",
  components: {
    Grid,
    Logo,
    News,
    FindButton,
  },
  data() {
    return {
      tab: ref('news')
    }
  }

}
</script>

<style lang="scss">
$columnSize: 7.56%;
$spaceSize: 0.82644%;

.wrapper {
  background-color: $gray;
}

.limiter {
  height: 100px;
}

header {
  width: 100%;
  display: flex;
  padding-top: $spaceSize;
  padding-bottom: $spaceSize;
}

.header__elem {
  background-color: white !important;
  color: $oB;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;


  .q-icon {
    font-size: 2em;
  }
}

.logo {
  width: calc(#{ $columnSize} * 2 + #{$spaceSize});
  margin-right: $spaceSize;
}

.q-tabs {
  flex-grow: 2;
  margin-right: $spaceSize;

  .header__liked-tab {
    margin-right: $spaceSize;
    margin-left: $spaceSize;
  }
}

.find-wrapper{
  width: $columnSize;
}

.q-tab {
  min-height: auto;
  height: 40px;
  flex-grow: 2;
  width: calc(#{$columnSize} * 2 + #{$spaceSize}) !important;
}

.q-tab__content {
  z-index: 2;
}

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

.q-btn .header__elem {
  &:before {
    box-shadow: none;
  }
}

.q-tab-panels {
  background-color: $gray;
}

.q-tab-panel {
  padding: 0;
}

</style>
