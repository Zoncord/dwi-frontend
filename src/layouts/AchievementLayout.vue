<template>
  <div class="achievement flex row justify-between q-mt-md">
    <nav class="achievement__navigation col-3">
      <div class="q-card achievement__navigation__card-info flex column text-center q-mb-md">
        <h5 class="achievement__navigation__card-info__title">{{ achievementTitle }}</h5>
        <h1 class="achievement__navigation__card-info__day">{{ achievementDay }}</h1>
        <h5 class="achievement__navigation__card-info__unit">{{ achievementUnit }}</h5>
      </div>
      <div class="achievement__navigation__controls q-card  flex">
        <q-btn icon="arrow_back_ios" class="achievement__navigation__controls__button" :ripple="false"
               @click="$router.back()"></q-btn>
        <q-btn icon="favorite"
               class="achievement__navigation__controls__button like-btn"
               :class="{liked: isAchievementLiked}"
               :ripple="false"
               @click="isAchievementLiked = !isAchievementLiked"
        ></q-btn>
        <q-btn icon="chat" class="achievement__navigation__controls__button" :ripple="false"></q-btn>
      </div>
    </nav>
    <div class="achievement__blog col-9">
      <AchievementPost
        v-for="item in news"
        :key="item"
        :title="item.title"
        :creation-time="item.date_time_of_creation"
        :owner-link="item.author"
        :liked="false"
        :likes-count="-1"
        :text="item.description"
      />
    </div>
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import AchievementPost from "components/Acievement/AchievementPost";

export default {
  name: "AchieveLayout",
  components: {
    AchievementPost,
  },
  data() {
    this.$axios.get(this.$dwiApi + 'achievements/achievement/' + this.$route.params.id).then(res => {
      this.achievementTitle = res.data.title
      this.achievementDay = res.data.days_since_the_last_incident
    })
    this.$axios.get(this.$dwiApi + 'blog/post/?author=&achievement=' + this.$route.params.id).then(res => {
      console.log(res.data.results)
      //TODO add getting likes from api
      this.news = res.data.results
    })
    return {
      achievementTitle: null,
      achievementDay: null,
      achievementUnit: 'Дня',
      isAchievementLiked: false,
      news: null
    }
  },
  watch: {
    isAchievementLiked(){
      console.log('Request')
      //TODO make axios request
    }
  }
}
</script>

<style lang="scss" scoped>


.achievement__blog {
  padding-left: 8px;
}

.achievement__navigation {
  padding-right: 8px;
}

.achievement__navigation__controls {
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.achievement__navigation__card-info {
  border-radius: 10px;
  padding: 30px;
}

.achievement__navigation__card-info__title {
  font-size: 30px;
  font-weight: 500;
}

.achievement__navigation__card-info__day {
  margin-top: 50px;
  margin-bottom: 50px;
  font-weight: 500;
}

.achievement__navigation__card-info__unit {
  font-size: 30px;
  font-weight: 500;
}

</style>

<style lang="scss">
.achievement__navigation__controls__button {
  border: none !important;
  width: 33.33%;
  border-radius: 0;
}

.q-card {
  border-radius: 10px;
}
.liked {
  color: $highlight;
}
.like-btn{
  transition: color .1s;
}
</style>
