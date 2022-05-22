<template>
  <q-menu
    touch-position
    context-menu
    class="date-card-menu flex justify-center"
  >
    <q-list class="date-card-menu__items">
      <q-item class="date-card-menu__items__item items-center" clickable @click="this.reset">
        <q-item-section>Reset</q-item-section>
        <q-icon name="refresh"/>
      </q-item>
      <q-item class="date-card-menu__items__item items-center" clickable @click="this.edit">
        <q-item-section class="flex items-center no-wrap">Edit</q-item-section>
        <q-icon name="edit"/>
      </q-item>
      <q-item class="date-card-menu__items__item items-center" clickable @click="this.delete">
        <q-item-section>Delete</q-item-section>
        <q-icon name="clear"/>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ContextMenu",
  props: {
    type: {
      required: true,
    },
    parentId: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async delete() {
      if (this.type === 'card') {
        await this.$axios.delete(this.$dwiApi + 'achievements/achievement/' + this.parentId, {
          headers: {
            Authorization: `Token ${this.token()}`
          }
        })
        document.location.reload()
      }
    },
    edit() {
      if (this.type === 'card') {
        this.$router.push(`/achievement/edit?achievementId=${this.parentId}`)
      }
    },
    reset() {

    }
  }
}
</script>

<style lang="scss" scoped>
.date-card-menu__items {
  padding: 10px;
}

.date-card-menu__items__item {
  min-height: 30px;
}
</style>

<style lang="scss">
.date-card-menu {
  width: 100px !important;
}
</style>
