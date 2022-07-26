<template>
  <UI :limiter="false" :footer="false">
    <ProgressForm
      :stages-count="1"
      @finish="finish"
      v-model="activeTab"
      v-if="achievement"
    >
      <template v-slot:Title>
        <h5 class="create-post__title q-my-xl">{{ $t('achievement.edit') }}</h5>
      </template>
      <template v-slot:Stage1>
        <TitleInput v-model="title" class="create-post__title-input" :max-length="64"/>
        <TextInput v-model="description" :max-length="128"/>
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
  name: "EditAchievement",
  components: {
    ProgressForm,
    TitleInput,
    TextInput,
    UI,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async finish() {
      await this.$axios.patch( `${this.$dwiApi}achievements/achievement/${this.$route.params.achievementId}`, {
        title: this.title,
        description: this.description,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })
      this.$router.go(-1)
    },
    // getAchievementsInformation() {
    //   this.$axios.get(`${this.$dwiApi}achievements/achievement/${this.$route.params.achievementId}`,  {
    //     headers: {
    //       Authorization: `Token ${this.token()}`
    //     }
    //   }).then(res => {
    //     this.title = res.data.title
    //     this.description = res.data.description
    //   })
    // },
  },
  mounted() {
    (async () => {
      this.achievement = await this.$Achievement.build({ctx: this, id: this.$route.params.achievementId})
    })()
  },
  data() {
    return {
      activeTab: 1,
      title: '',
      description: '',
      achievement: null,
    }
  },
  watch: {
    'achievement.title': function(){
      this.title = this.achievement.title
      this.description = this.achievement.description
    }
  }
}
</script>

<style lang="scss" scoped>
.create-post{
  padding-bottom: 50px;
}
.progress-form-bar {
  position: fixed;
  bottom: 0;
}
</style>
