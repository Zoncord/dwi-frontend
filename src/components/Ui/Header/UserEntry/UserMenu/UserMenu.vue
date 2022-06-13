<template>
  <q-menu class="user-entry__menu flex column justify-center items-center" anchor="bottom right" self="top right">
    <div class="q-pa-md">
      <div class="flex">
        <UserImage class="user-entry__menu__user-image q-mr-md" :owner="this.$user"/>
        <div class="flex column">
          <div class="user-entry__menu__user-information flex column justify-center">
            <UserName name-class="user-entry__menu__user-name" :name="this.$user.generalInfo.name"/>
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
import UserImage from "src/components/Core/User/UserImage.vue"
import OnlineDisplay from "src/components/Core/User/OnlineDisplay";
import UserMenuTab from "src/components/Ui/Header/UserEntry/UserMenu/MenuTab/UserMenuTab"
import UserName from "src/components/Core/User/UserName";
export default {
  name: "Menu",
  components: {
    UserImage,
    OnlineDisplay,
    UserMenuTab,
    UserName,
  },
  data() {
    return {
      menuTabs: {
        profile: {
          icon: 'person',
          to: '/profile/' + this.$user.id
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
<style>
.user-entry__menu__user-name {
  font-size: 23px;
  font-weight: 400;
  white-space: nowrap
}

</style>
