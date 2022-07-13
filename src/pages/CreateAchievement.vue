<template>
  <UI :footer="false" :limiter="false">
    <ProgressForm
      @finish="finish"
      :stages-count="2"
      v-model="activeTab"
    >
      <template v-slot:Title>
        <h5 class="create-achievement__title">{{ $t('createAchievement.title') }}</h5>
      </template>

      <template v-slot:Stage1>
        <TitleInput v-model="title" max-length="64"/>
        <TextInput v-model="description" max-length="256"/>
      </template>

      <template v-slot:Stage2>
        <div class="flex justify-between">
          <q-input
            class="create-achievement__second-stage__item create-achievement__second-stage__input"
            outlined
            :placeholder="$t('createAchievement.secondStage.category')"
            :model-value="category"
            v-model="category"
          />
          <TagsInput
            class="create-achievement__second-stage__item"
            v-model="tags"
          />
        </div>
      </template>
    </ProgressForm>
  </UI>
</template>

<script>
import TagsInput from "components/Core/Inputs/TagsInput";
import {mapGetters} from "vuex";
import UI from "components/Ui/UI";
import ProgressForm from "components/Core/Forms/ProgressForm/ProgressForm";
import TitleInput from "components/Core/Inputs/TitleInput";
import TextInput from "components/Core/Inputs/TextInput";

export default {
  name: "CreateCard",
  components: {
    TagsInput,
    UI,
    ProgressForm,
    TitleInput,
    TextInput,
  },
  data() {
    return {
      activeTab: 1,
      title: '',
      description: '',
      category: '',
      tags: [],
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async finish() {
      let categoryUrl
      if (this.category) {
        await this.$axios.post(`${this.$dwiApi}achievements/category/`, {
          title: this.category,
        }, {
          headers: {
            Authorization: `Token ${this.userToken()}`
          }
        }).then(res => {
          categoryUrl = res.data.url
        })
      }
      await this.$Achievement.createBE(this, {
        title: this.title,
        description: this.description,
        tags: this.tags,
        category: categoryUrl
      })
      this.$router.go(-1)
    },
    deleteTag(id) {
      this.tags.splice(id, 1)
    },
  },
}
</script>
<style lang="scss" scoped>
.limiter {
  flex-grow: 2;
  margin-bottom: 85px;
}

</style>

<style lang="scss">
.create-achievement__title {
  margin-top: 60px;
  margin-bottom: 60px;
}

.create-achievement__fist-stage__title-input {
  margin-bottom: 20px;

  .q-field__control {
    height: 40px;
  }

  .q-field__append {
    height: 40px;
  }
}

.create-achievement__fist-stage__description-input {
  .q-field__control {
    min-height: 150px;
  }
}

.create-achievement {
  height: 100vh;
  position: relative;
}

.progress-form-bar {
  position: fixed;
  bottom: 0;
}

.create-achievement__fist-stage__input-counter {
  font-size: 15px !important;
}

//Second Stage
.create-achievement__second-stage__item {
  width: calc(50% - 10px);
}

.create-achievement__second-stage__input {
  .q-field__control {

    height: 30px;

    .q-field__append {
      height: 30px;
    }

    .q-field__prepend {
      height: 30px;
    }
  }

}


</style>
