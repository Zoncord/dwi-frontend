<template>
  <UI :limiter="false" :footer="false">
    <q-form
      @validation-success="finish()"
      @submit.prevent=""
      class="create-post flex column text-center"
    >
      <h5 class="create-post__title q-my-xl">Edit Post</h5>
      <q-tab-panels v-model="activeTab">
        <q-tab-panel :name="1" class="limiter create-post__fist-stage">
          <TitleInput v-model="title" class="create-post__title-input"/>
          <TextInput v-model="description"/>
        </q-tab-panel>
      </q-tab-panels>
      <ProgressFormBar
        @finish="finish()"
        :active-stage="activeTab"
        :stages-count="1"
      />
    </q-form>
  </UI>
</template>

<script>
import TitleInput from "components/Core/Form/TitleInput";
import TextInput from "components/Core/Form/TextInput";
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";
import {mapGetters} from "vuex";
import UI from "components/Ui/UI";

export default {
  name: "EditPost",
  components: {
    TitleInput,
    TextInput,
    ProgressFormBar,
    UI,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async finish() {
      await this.$axios.patch( `${this.$dwiApi}blog/post/${this.$route.params.postId}`, {
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
      this.$axios.get(`${this.$dwiApi}blog/post/${this.$route.params.postId}`,  {
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
