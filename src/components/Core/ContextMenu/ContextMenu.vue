<template>
  <q-menu
    touch-position
    context-menu
    class="date-card-menu flex justify-center"
  >
    <q-list class="date-card-menu__items">
      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('reply')"
        clickable
        @click="this.reply"
      >
        <q-item-section>{{ $t('contextMenu.reply') }}</q-item-section>
        <q-icon name="reply"/>
      </q-item>
      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('reset')"
        clickable
        @click="this.reset"
      >
        <q-item-section>{{ $t('contextMenu.reset') }}</q-item-section>
        <q-icon name="refresh"/>
      </q-item>

      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('edit')"
        clickable
        @click="this.edit"
      >
        <q-item-section class="flex items-center no-wrap">{{ $t('contextMenu.edit') }}</q-item-section>
        <q-icon name="edit"/>
      </q-item>

      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('delete')"
        clickable
        @click="this.delete"
      >
        <q-item-section>{{ $t('contextMenu.delete') }}</q-item-section>
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
    parent: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    delete() {
      this.$q.dialog({
        comment: this.$t('dialog.title.sure'),
        message: this.$t(`dialog.message.delete.${this.type}`),
        cancel: true,
        persistent: true,
      }).onOk(() => {
        if (this.type === 'achievement') {
          this.$axios.delete(`${this.$dwiApi}achievements/achievement/${this.parent.id}/`, {
            headers: {
              Authorization: `Token ${this.token()}`
            },
          })
          this.$emit('deleteAchievement')
        } else if (this.type === 'post') {
          this.$axios.delete(`${this.$dwiApi}blog/post/${this.parent.id}/`, {
            headers: {
              Authorization: `Token ${this.token()}`
            },
          })
          this.$emit('deletePost')
        } else if (this.type === 'comment') {
          this.parent.deleteBE()
          this.$emit('deleteComment')
        }
      })
    },
    edit() {
      if (this.type === 'achievement') {
        this.$router.push(`/achievement/edit/${this.parent.id}`)
      } else if (this.type === 'post') {
        this.$router.push(`/post/edit/${this.parent.id}`)
      }
    },
    reset() {
      this.$q.dialog({
        comment: this.$t('dialog.title.sure'),
        message: this.$t('dialog.message.reset.achievement'),
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await this.$axios.post(`${this.$dwiApi}achievements/incident/`, {
            achievement: `${this.$dwiApi}achievements/achievement/${this.parent.id}/`,
          },
          {
            headers: {
              Authorization: `Token ${this.token()}`
            }
          })

      })
      this.parent.resetDays()
    },
    reply(){

    }
  },
  data() {
    let items
    if (this.parent instanceof this.$Achievement) {
      this.type = 'achievement'
      items = ['reset', 'edit', 'delete']
    } else if (this.parent instanceof this.$Post) {
      this.type = 'post'
      items = ['edit', 'delete']
    } else if (this.parent instanceof this.$Comment) {
      this.type = 'comment'
      items = ['reply', 'delete']
    }
    return {
      items: items,
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
