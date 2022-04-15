<template>
  <div class="user-entry flex items-center">
    <UserName/>
    <UserIcon></UserIcon>
    <q-menu>
      <q-list style="min-width: 100px">
        <div class="flex items-center">
          <UserIcon/>
          <UserName/>
        </div>
        <q-item clickable v-close-popup>
          <q-item-section>Профиль</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>Добавить аккаунт</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>

      </q-list>
    </q-menu>
  </div>
</template>

<script>
import UserName from "components/UserName";
import UserIcon from "components/UserIcon";

export default {
  name: "UserEntry",
  components: {
    UserName,
    UserIcon,
  }
}
</script>

<style scoped>

</style>
