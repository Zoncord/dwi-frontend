<template>
  <div class="tags-component">
    <q-input
      class="create-achievement__second-stage__input flex justify-between"
      outlined
      :placeholder="$t('createAchievement.secondStage.tags')"
      :model-value="tag"
      v-model="tag"
      @keydown.enter.prevent="addTag"
    >

      <template v-slot:append>
        <p class="tags-component__tags-counter">
          {{ maxTags - tags.length }}
        </p>
        <q-icon name="add" class="cursor-pointer" @click="addTag"/>
      </template>
    </q-input>
    <q-list class="q-mt-sm">
      <q-item class="tags-component__tag q-mb-sm" v-for="(tag, id) in tags" :key="tag">
        <q-item-section class="tags-component__tag__section flex items-center">
          {{ '#' + tag }}
        </q-item-section>

        <q-btn icon="close" flat dense class="tags-component__tag__delete-btn" size="10px" :ripple="false"
               @click="$emit('deleteTag', id)"></q-btn>
      </q-item>
    </q-list>

  </div>
</template>

<script>
export default {
  name: "TagsComponent",
  props: {
    tags: {
      required: true,
    },
    maxTags: {
      required: true,
    }
  },
  data() {
    return {
      tag: '',
    }
  },
  methods: {
    addTag() {
      this.$emit('addTag', this.tag)
      this.tag = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-component__tag {
  width: 100%;
  height: 30px;
  min-height: auto;
  border: solid 1px $border_color;
  border-radius: 5px;

  &:hover {
    color: black;
  }
}

.tags-component__tag__section {
  flex-direction: row;
  justify-content: space-between;
  padding-left: 12px;
  overflow-x: hidden;
  flex-wrap: nowrap;
}

.tags-component__tags-counter{
  font-size: 15px;
}

</style>

<style lang="scss">
.tags-component__tag__delete-btn {
  border: none;
  margin-left: 5px;
  margin-right: 12px;

  .q-btn__content {
    width: 15px;
    height: 15px;

    .q-icon {
      font-size: 20px;
    }
  }
}
</style>
