<template>
  <div class="user-entry flex items-center">
    <p class="user-name">{{ userName }}</p>
    <UserImage class="user-entry__user-image"/>
    <q-menu class="user-entry__menu" anchor="bottom right" self="top right">
      <div class="q-pa-md">
        <div class="column">
          <div class="row justify-between">
            <UserImage class="user-entry__menu__user-image col-4"/>
            <div class="flex column justify-center col-7">
              <p class="user-name">{{ userName }}</p>
              <OnlineDisplay/>
            </div>
          </div>
        </div>

        <div class="row justify-between">
            <div class="col-4"></div>
          <div class="col-7"><q-list class="user-entry__menu-list flex column">
            <q-item clickable v-close-popup dense>
              <q-item-section class="flex items-center ">
                <q-icon name="person" class="q-mr-sm"></q-icon>
                <p>{{ $t('header.userEntryMenu.profile') }}</p>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup dense>
              <q-item-section class="flex items-center ">
                <q-icon name="add" class="q-mr-sm"></q-icon>
                <p>{{ $t('header.userEntryMenu.addAccount') }}</p>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup dense>
              <q-item-section class="flex items-center ">
                <q-icon name="info" class="q-mr-sm"></q-icon>
                <p>{{ $t('header.userEntryMenu.help') }}</p>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup dense>
              <q-item-section class="flex items-center ">
                <q-icon name="settings" class="q-mr-sm"></q-icon>
                <p>{{ $t('header.userEntryMenu.settings') }}</p>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup dense>
              <q-item-section class="flex items-center ">
                <q-icon name="logout" class="q-mr-sm"></q-icon>
                <p>{{ $t('header.userEntryMenu.exit') }}</p>
              </q-item-section>
            </q-item>
          </q-list></div>
        </div>
      </div>

      <q-separator/>
      <p class="q-ma-md">
        Zoncord LLC all rights reserved© 2022
      </p>


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
</style>

<style scoped>
.user-entry {
  cursor: pointer;
}

.user-name {
  margin-right: 10px;
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
</style>
