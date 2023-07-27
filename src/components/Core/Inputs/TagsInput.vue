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
          {{ '#' + tag.tag }}
        </q-item-section>

        <q-btn
          icon="close"
          flat
          dense
          class="tags-component__tag__delete-btn"
          size="10px"
          :ripple="false"
          @click="deleteTag(id)"
        />
      </q-item>
    </q-list>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TagsComponent",
  props: {
    modelValue: {},
    maxTags: {
      default: 20,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async addTag() {
      if (this.tag && this.tags.length < this.maxTags) {
        await this.$axios.post(`${this.$dwiApi}achievements/tag/`, {
          title: this.tag,
        }, {
          headers: {
            Authorization: `Token ${this.token()}`,
          }
        }).then(res => {
          this.tags.unshift({
            tag: this.tag,
            url: res.data.url,
          })
        })
        this.tag = ''
      }
    },
    async deleteTag(id) {
      this.tags.splice(id, 1)
    },
  },
  data() {
    return {
      tags: this.modelValue,
      tag: '',
    }
  },
  watch: {
    tags() {
      this.$emit('update:modelValue', this.tags)
    },
    modelValue() {
      this.tags = this.modelValue
    }
  },
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

.tags-component__tags-counter {
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
