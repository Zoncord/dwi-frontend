<template>
  <header class="flex items-center">
    <div class="limiter flex justify-between items-center">
      <Logo
        class="header-elem"
        color="highlight"
        link="/feed"
        v-if=" $q.screen.gt.xs || !searchFocused"
      >
        DWI
      </Logo>
      <q-tabs
        class="header-tabs flex items-center gt-sm"
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
      <Search :class="{'header-elem': $q.screen.gt.sm, }" v-model="searchFocused"/>
      <UserEntry class="gt-sm"/>
    </div>
  </header>
</template>

<script>
import Logo from "components/Core/Logo/Logo";
import Search from "components/Ui/Header/Search/SearchElement";
import UserEntry from "components/Ui/Header/UserEntry/UserEntry";

export default {
  name: "Header",
  components: {
    Logo,
    Search,
    UserEntry
  },
  data(){
    return {
      searchFocused: false,
    }
  }
}
</script>

<style lang="scss">
header {
  min-height: 55px;
  position: fixed;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #B8B8B8;
  background-color: white;
}

.limiter {
  flex-wrap: nowrap;
}

.logo {
  font-size: 30px !important;
}

.q-tab {
  min-height: 55px;
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

@media(max-width: 1024px) {
  .header-elem {
    margin-right: 15px;
  }
}

.user-entry {
  min-height: 55px;
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

//.q-tab__content{
//  min-width: auto;
//}
.user-entry__menu {
  border-radius: 0 0 10px 10px;
  box-shadow: none;
  border: 1px solid $border_color;
  margin-top: -1px !important;
}

.user-entry {
  margin-right: 0;
}

</style>
