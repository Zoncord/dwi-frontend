<template>
  <HeaderComponent/>
  <q-form
    @validation-success="finish()"
    @submit.prevent=""
    class="create-post flex column text-center"
  >
    <h5 class="create-post__title q-my-xl">Create Post</h5>
    <q-tab-panels v-model="activeTab">
      <q-tab-panel :name="1" class="limiter create-post__fist-stage">
        <q-input
          outlined
          v-model="title"
          borderless
          :placeholder="$t('createAchievement.firstStage.title') + ' *'"
          maxlength="256"
          :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
          class="create-achievement__fist-stage__title-input"
          :model-value="title">
          <template v-slot:append>
            <p class="create-post__fist-stage__input-counter create-achievement__input">
              {{ 256 - title.length }}
            </p>
          </template>
        </q-input>

        <q-input
          type="textarea"
          class="create-post__fist-stage__description-input"
          outlined
          v-model="description"
          :model-value="description"
          autogrow
          maxlength="4096"
          :placeholder="$t('createAchievement.firstStage.description') + ' *'"
          :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
        >
          <template v-slot:append class="create-post__fist-stage__input-counter create-achievement__input">
            <p class="create-post__fist-stage__input-counter">
              {{ 4096 - description.length }}
            </p>
          </template>
        </q-input>
      </q-tab-panel>
    </q-tab-panels>
    <ProgressFormBar
      @checkValidation="checkValidation()"
      @finish="finish()"
      :active-stage="activeTab"
      :stages-count="stagesCount"
    />
  </q-form>
</template>

<script>
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";
import HeaderComponent from "components/Main/Header/HeaderComponent";
import {mapGetters} from "vuex";
export default {
  name: "CreatePost",
  components: {
    ProgressFormBar,
    HeaderComponent
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    checkValidation() {
      if (this.isValid) {
        this.finish()
      }
    },
    async finish() {
      console.log( this.$dwiApi + `achievements/achievement/${this.$route.query.achievement_id}/`)
      await this.$axios.post(this.$dwiApi + 'blog/post/', {
        achievement: this.$dwiApi + `achievements/achievement/${this.$route.query.achievement_id}/`,
        title: this.title,
        description: this.description,
      }, {
        headers: {
          Authorization: 'Token ' + this.token()
        }
      })
      this.$router.go(-1)
    },
  },
  data() {
    return {
      activeTab: 1,
      stagesCount: 1,
      isValid: false,
      title: '',
      description: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.create-post__title {

}

.progress-form-bar {
  position: fixed;
  bottom: 0;
}

.create-post__fist-stage__input-counter {
  font-size: 15px !important;
}


</style>

<style lang="scss">
.create-post__fist-stage__title-input {
  margin-bottom: 20px;

  .q-field__control {
    height: 40px;
  }

  .q-field__append {
    height: 40px;
  }
}

.create-post__fist-stage__description-input {
  .q-field__control {
    min-height: 150px;
  }
}
</style>
