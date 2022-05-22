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
        <TitleInput v-model="title" class="create-post__title-input"/>
        <TextInput v-model="description"/>
      </q-tab-panel>
    </q-tab-panels>
    <ProgressFormBar
      @checkValidation="checkValidation()"
      @finish="finish()"
      :active-stage="activeTab"
      :stages-count="1"
    />
  </q-form>
</template>

<script>
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";
import HeaderComponent from "components/Main/Header/HeaderComponent";
import {mapGetters} from "vuex";
import TitleInput from "components/Core/Form/TitleInput";
import TextInput from "components/Core/Form/TextInput";
export default {
  name: "CreatePost",
  components: {
    ProgressFormBar,
    HeaderComponent,
    TitleInput,
    TextInput,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    checkValidation() {
      if (this.isValid) {
        this.finish()
      }
    },
    async finish() {
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
      isValid: false,
      title: '',
      description: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.create-post__title-input{
  margin-bottom: 20px;
}
</style>
