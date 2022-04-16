<template>
  <header class="flex items-center">
    <div class="limiter">
      <q-tabs class="flex justify-between items-center" active-color="highlight" narrow-indicator>
        <Logo class="header-elem" color="highlight">DWI</Logo>

        <q-route-tab class="header-elem"  content-class="tab" :label="$t('header.tabs.feed')" to="/app/feed" no-caps :ripple="false"></q-route-tab>
        <q-route-tab class="header-elem" content-class="tab" :label="$t('header.tabs.explore')" to="/app/explore" no-caps :ripple="false"></q-route-tab>

        <Search class="header-elem"/>
        <UserEntry class="header-elem"/>
      </q-tabs>
    </div>
  </header>
</template>

<script>
import Logo from "components/Logo";
import Search from "components/Main/Header/HeaderComponents/Search";
import UserEntry from "components/Main/Header/HeaderComponents/UserEntry";

export default {
  name: "Header",
  components: {
    Logo,
    Search,
    UserEntry
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
      tab: null,
    }
  },
  watch: {}
}
</script>

<style lang="scss">
header {
  height: 55px;
  border-bottom: 1px solid #B8B8B8;
}
.logo {
  font-size: 30px !important;
}
.q-tab {
  height: 55px;
  .q-focus-helper{
    display: none;
  }
  .tab{
    height: 100%;
    *{
      font-weight: 400;
      font-size: 16px;
    }

  }
  .q-tab__label{
    color: black;
  }
  &:hover{
      .q-tab__label{
        color: $highlight;
      }
  }
}
.q-tabs{
  width: 100%;
  .header-elem{
    margin-right: 20px;
  }
  .user-entry{
    margin-right: 0;
  }
}
.q-tabs__content{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-wrapper{
  flex-grow: 10;
}
.q-tab__indicator{
  height: 3px !important  ;
}
.user-name{
  font-size: 15px;
}

</style>
