<template>
  <UI :limiter="false" :footer="false">
    <ProgressForm
      @finish="finish"
      :stages-count="1"
      v-model="activeTab"
      v-if="post"
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
  },
  mounted() {
    (async () => {
      this.post = await this.$Post.build({ctx: this, id: this.$route.params.postId})
      console.log(this.post)
    })()
  },
  data() {
    return {
      activeTab: 1,
      title: '',
      description: '',
      post: null,
    }
  },
  watch: {
    'post.title': function(){
      this.title = this.post.title
      this.description = this.post.description
    }
  },
}
</script>

<style lang="scss" scoped>
.progress-form-bar {
  position: fixed;
  bottom: 0;
}
</style>
