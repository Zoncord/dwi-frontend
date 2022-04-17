<template>
  <div class="user-entry flex items-center justify-center">
    <p class="user-entry__user-name">{{ userName }}</p>
    <UserImage class="user-entry__user-image"/>
    <q-menu class="user-entry__menu flex column justify-center items-center" anchor="bottom right" self="top right">
      <div class="q-pa-md">
        <div class="flex">
          <UserImage class="user-entry__menu__user-image q-mr-md"/>
          <div class="flex column">
            <div class="user-entry__menu__user-information flex column justify-center">
              <p class="user-entry__menu__user-name">{{ userName }}</p>
              <OnlineDisplay/>
            </div>
            <q-list class="user-entry__menu-list flex column">
              <q-item clickable v-close-popup dense>
                <q-item-section class="flex items-center ">
                  <q-icon name="person" class="user-entry__menu-list__icon"></q-icon>
                  <p>{{ $t('header.userEntryMenu.profile') }}</p>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup dense>
                <q-item-section class="flex items-center ">
                  <q-icon name="add" class="user-entry__menu-list__icon"></q-icon>
                  <p>{{ $t('header.userEntryMenu.addAccount') }}</p>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup dense>
                <q-item-section class="flex items-center ">
                  <q-icon name="info" class="user-entry__menu-list__icon"></q-icon>
                  <p>{{ $t('header.userEntryMenu.help') }}</p>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup dense>
                <q-item-section class="flex items-center ">
                  <q-icon name="settings" class="user-entry__menu-list__icon"></q-icon>
                  <p>{{ $t('header.userEntryMenu.settings') }}</p>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup dense>
                <q-item-section class="flex items-center ">
                  <q-icon name="logout" class="user-entry__menu-list__icon"></q-icon>
                  <p>{{ $t('header.userEntryMenu.exit') }}</p>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

        </div>
      </div>

      <q-separator class="user-entry__content-separator"/>
      <p class="user-entry__copyright q-ma-md">Zoncord LLC all rights reserved© 2022</p>
    </q-menu>
  </div>
</template>

<script>
import UserName from "components/UserName";
import UserImage from "components/UserImage";
import OnlineDisplay from "components/Core/User/OnlineDisplay";

export default {
  name: "UserEntry",
  components: {
    UserImage,
    OnlineDisplay,
  },
  data() {
    return {
      userName: 'Michael Landrover',
    }
  }
}
</script>

<style lang="scss">
.q-item__section {
  flex-direction: row;
}

.q-menu.q-position-engine {
  max-width: none !important;
}

.user-entry__menu {
  margin-top: 7px !important;
  border-radius: 0 0 10px 10px;
  box-shadow: none;
  border: 1px solid $border_color;
}
</style>

<style scoped>
.user-entry {
  cursor: pointer;
}

.user-entry__user-name {
  margin-right: 10px;
  font-size: 17px;
}

.user-entry__menu__user-name {
  font-size: 23px;
  font-weight: 400;
  white-space: nowrap
}


.user-entry__menu-list {
  align-items: start;
}

.user-entry__user-image {
  width: 40px;
}

.user-entry__menu__user-image {
  width: 80px;
}

</style>
<style lang="scss">
.q-focus-helper {
  display: none;
}

.q-item {
  &:hover {
    color: $highlight;
  }

  padding: 0;
}

.user-entry__menu-list__icon {
  margin-right: 3px;
  margin-left: 3px;
}

.user-entry__copyright {
  display: block;
}

.user-entry__content-separator {
  width: 100%;
}
.user-entry__menu__user-information{
  height: 80px;
}
</style>
