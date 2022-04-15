<template>
  <header class="flex items-center">
    <div class="limiter">
      <q-tabs class="flex justify-between items-center" active-color="additional">
        <Logo class="header-elem">DWI</Logo>

        <q-route-tab class="header-elem" :label="$t('header.tabs[0]')" to="/app/feed" no-caps :ripple="false"></q-route-tab>
        <q-route-tab class="header-elem" :label="$t('header.tabs[1]')" to="/app/recommendations" no-caps :ripple="false"></q-route-tab>

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
  height: 80px;
}
.logo {
  font-size: 30px !important;
}
.q-tab {
  .q-focus-helper{
    display: none;
  }
  * {
    font-size: 14px;
  }
  .q-tab__label{
    color: black;
  }
  &:hover{
      .q-tab__label{
        color: $additional;
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
</style>
