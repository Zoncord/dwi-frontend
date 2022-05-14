<template>
  <q-menu class="user-entry__menu flex column justify-center items-center" anchor="bottom right" self="top right">
    <div class="q-pa-md">
      <div class="flex">
        <UserImage class="user-entry__menu__user-image q-mr-md"/>
        <div class="flex column">
          <div class="user-entry__menu__user-information flex column justify-center">
            <p class="user-entry__menu__user-name">{{ userName }}</p>
            <OnlineDisplay/>
          </div>
          <q-list class="user-entry__menu-list flex column" >
            <UserMenuTab
              v-for="(tab, tabName) in menuTabs"
              :key="tab"
              :icon="tab.icon"
              :to="tab.to"
              :text="$t(`header.userEntryMenu.${tabName}`)"
            />
          </q-list>
        </div>
      </div>
    </div>

    <q-separator class="user-entry__content-separator"/>
    <p class="user-entry__copyright q-ma-md">Zoncord LLC all rights reserved© 2022</p>
  </q-menu>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import OnlineDisplay from "components/Core/User/OnlineDisplay";
import UserMenuTab from "components/Main/Header/HeaderComponents/UserEntry/Components/UserMenu/Components/UserMenuTab";

export default {
  name: "Menu",
  props: {
    userName: {
      required: true
    }
  },
  components: {
    UserImage,
    OnlineDisplay,
    UserMenuTab,
  },
  data() {
    return {
      menuTabs: {
        profile: {
          icon: 'person',
          to: '/profile/' + this.$userId
        },
        help: {
          icon: 'help',
          to: '/help'
        },
        settings: {
          icon: 'settings',
          to: '/settings'
        },
        exit: {
          icon: 'logout',
          to: '/logout'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped >
.user-entry__menu__user-name {
  font-size: 23px;
  font-weight: 400;
  white-space: nowrap
}

.user-entry__menu-list {
  align-items: start;
}

.user-entry__menu__user-image {
  width: 80px;
  align-items: start;
}

.q-menu{
  max-width: none !important;
  max-height: none !important;
  flex-wrap: nowrap;
}

</style>
