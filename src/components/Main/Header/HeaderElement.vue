<template>
  <header class="flex items-center">
    <div class="limiter flex justify-between items-center">
      <Logo class="header-elem" color="highlight">DWI</Logo>
      <q-tabs
        class="flex items-center"
        active-color="highlight"
        indicator-color="highlight"
        narrow-indicator
        align="justify"
      >
        <q-route-tab
          class="header-elem"
          content-class="tab"
          :label="$t('header.tabs.feed')"
          to="/feed"
          no-caps
          :ripple="false"
        />
        <q-route-tab
          class="header-elem"
          content-class="tab"
          :label="$t('header.tabs.explore')"
          to="/explore"
          no-caps
          :ripple="false"
        />
      </q-tabs>
      <Search class="header-elem"/>
      <UserEntry class="header-elem"/>
    </div>
  </header>
</template>

<script>
import Logo from "components/Core/Logo";
import Search from "components/Main/Header/HeaderComponents/Search/SearchElement";
import UserEntry from "components/Main/Header/HeaderComponents/UserEntry/UserEntry";

export default {
  name: "Header",
  components: {
    Logo,
    Search,
    UserEntry
  },
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
  padding: 0;

  .q-focus-helper {
    display: none;
  }

  .tab {
    height: 100%;
    * {
      font-weight: 400;
      font-size: 16px;
    }

  }

  .q-tab__label {
    color: black;
  }

  &:hover {
    .q-tab__label {
      color: $highlight;
    }
  }
}

.header-elem {
  margin-right: 40px;
}

.user-entry{
  height: 55px;
}

.q-tabs__content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-wrapper {
  flex-grow: 10;
}

.q-tab__indicator {
  height: 3px !important;
}

.user-name {
  font-size: 15px;
}

.q-tab__content{
  min-width: auto;
}
.user-entry__menu {
  //margin-top: 7px !important;
  border-radius: 0 0 10px 10px;
  box-shadow: none;
  border: 1px solid $border_color;
  margin-top: -1px !important;
}
</style>
