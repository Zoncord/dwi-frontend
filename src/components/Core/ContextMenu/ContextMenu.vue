<template>
  <q-menu
    touch-position
    context-menu
    class="date-card-menu flex justify-center"
    ref="contextMenu"
  >
    <q-list class="date-card-menu__items">
      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('reply')"
        clickable
        @click="this.reply"
      >
        <q-item-section class="q-mr-sm">{{ $t('contextMenu.reply') }}</q-item-section>
        <q-icon name="reply"/>
      </q-item>
      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('reset') && (this.parent.owner.url === this.$user.url || this.parent.owner === this.$user.url)"
        clickable
        @click="this.reset"
      >
        <q-item-section class="q-mr-sm">{{ $t('contextMenu.reset') }}</q-item-section>
        <q-icon name="refresh"/>
      </q-item>

      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('edit') && (this.parent.owner.url === this.$user.url || this.parent.owner === this.$user.url)"
        clickable
        @click="this.edit"
      >
        <q-item-section class="q-mr-sm">{{ $t('contextMenu.edit') }}</q-item-section>
        <q-icon name="edit"/>
      </q-item>

      <q-item
        class="date-card-menu__items__item items-center"
        v-if="this.items.includes('delete') && (this.parent.owner.url === this.$user.url || this.parent.owner === this.$user.url)"
        clickable
        @click="this.delete"
      >
        <q-item-section class="q-mr-sm">{{ $t('contextMenu.delete') }}</q-item-section>
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
          this.parent.deleteBE()
          this.$emit('deleteAchievement')
        } else if (this.type === 'post') {
          this.parent.deleteBE()
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
      } else if (this.type === 'comment') {
        this.$parent.startEditing()
        this.$refs.contextMenu.hide()
      }
    },
    reset() {
      this.$q.dialog({
        comment: this.$t('dialog.title.sure'),
        message: this.$t('dialog.message.reset.achievement'),
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        this.parent.resetDays()
      })

    },
    reply() {
      this.$parent.reply(this.parent)
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
      items = ['reply', 'edit', 'delete']
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
//.date-card-menu {
//  width: 100px !important;
//}
</style>
