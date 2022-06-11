<template>
  <UI :limiter="false" :footer="false">
    <ProgressForm
      @finish="finish"
      :stages-count="1"
      v-model="activeTab"
    >
      <template v-slot:Title>
        <h5 class="edit-post__title q-my-xl">{{ $t('post.edit') }}</h5>
      </template>
      <template v-slot:Stage1>
        <TitleInput v-model="title" class="edit-post__title-input"/>
        <TextInput v-model="description"/>
      </template>
    </ProgressForm>
  </UI>
</template>

<script>
import TitleInput from "components/Core/Inputs/TitleInput";
import TextInput from "components/Core/Inputs/TextInput";
import {mapGetters} from "vuex";
import UI from "components/Ui/UI";
import ProgressForm from "components/Core/Forms/ProgressForm/ProgressForm";

export default {
  name: "EditPost",
  components: {
    TitleInput,
    TextInput,
    // ProgressFormBar,
    UI,
    ProgressForm,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async finish() {
      await this.$axios.patch(`${this.$dwiApi}blog/post/${this.$route.params.postId}`, {
        title: this.title,
        description: this.description,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })
      this.$router.go(-1)
    },
    getAchievementsInformation() {
      this.$axios.get(`${this.$dwiApi}blog/post/${this.$route.params.postId}`, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.title = res.data.title
        this.description = res.data.description
      })
    },
  },
  mounted() {
    this.getAchievementsInformation()
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
.progress-form-bar {
  position: fixed;
  bottom: 0;
}
</style>
