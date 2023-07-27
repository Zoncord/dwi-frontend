<template>
  <UI :limiter="false" :footer="false">
    <ProgressForm
      @finish="finish"
      :stages-count="1"
      v-model="activeTab"
    >
      <template v-slot:Title>
        <h5 class="create-post__title q-my-xl">Create Post</h5>
      </template>

      <template v-slot:Stage1>
        <TitleInput v-model="title" class="create-post__title-input"/>
        <TextInput v-model="description"/>
      </template>
    </ProgressForm>
  </UI>
</template>

<script>
import {mapGetters} from "vuex";
import TitleInput from "components/Core/Inputs/TitleInput";
import TextInput from "components/Core/Inputs/TextInput";
import UI from "components/Ui/UI";
import ProgressForm from "components/Core/Forms/ProgressForm/ProgressForm";

export default {
  name: "CreatePost",
  components: {
    ProgressForm,
    TitleInput,
    TextInput,
    UI,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
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
      title: '',
      description: '',
    }
  }
}
</script>

<style lang="scss" scoped>
.create-post__title-input {
  margin-bottom: 20px;
}
</style>
