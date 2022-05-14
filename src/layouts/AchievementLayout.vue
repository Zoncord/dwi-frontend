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
               :class="{liked: isLiked}"
               :ripple="false"
               @click="handleAchievementLike()"
        ></q-btn>
        <q-btn icon="chat" class="achievement__navigation__controls__button" :ripple="false"></q-btn>
      </div>
    </nav>
    <div class="achievement__blog col-9">
      <AchievementPost
        v-for="post in posts"
        :key="post"
        :title="post.title"
        :creation-time="post.date_time_of_creation"
        :owner-link="post.author"
        :liked="false"
        :likes-count="-1"
        :text="post.description"
      />
    </div>
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import AchievementPost from "components/Acievement/AchievementPost";
import {mapGetters} from "vuex";

export default {
  name: "AchieveLayout",
  components: {
    AchievementPost,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getIsLiked() {
      this.$axios.get(this.$dwiApi + `rating/achievement/?user=${this.$userId}&achievement=${this.$route.params.id}`).then(res => {
        this.isLiked = res.data.count
      }).catch(err => {
        console.log(err)
      })
    },
    getAchievementData() {
      this.$axios.get(this.$dwiApi + 'achievements/achievement/' + this.$route.params.id).then(res => {
        this.achievementTitle = res.data.title
        this.achievementDay = res.data.days_since_the_last_incident
        this.achievementUrl = res.data.url
        console.log(res)
      })
    },
    getAchievementNews() {
      this.$axios.get(this.$dwiApi + 'blog/post/?author=&achievement=' + this.$route.params.id).then(res => {
        // console.log(res.data.results)
        //TODO add getting likes from api
        this.posts = res.data.results
      })
    },
    handleAchievementLike() {
      this.isLiked = !this.isLiked
      if (this.isLiked) {
        this.$axios.post(this.$dwiApi + `rating/achievement/`, {
          user: this.$userUrl,
          achievement: this.achievementUrl
        }, {
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then(res => {
          console.log(res)
        })
      }
      else{
        this.$axios.get(this.$dwiApi + `rating/achievement/?user=${this.$userId}&achievement=${this.$route.params.id}`, {
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then(likeIdResponse => {
          this.$axios.delete(likeIdResponse.data.results[0].url, {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          }).then(res => {
            console.log(res)
          }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
        })
      }
    }
  },
  data() {
    this.getAchievementData()
    this.getAchievementNews()
    this.getIsLiked()
    return {
      achievementTitle: null,
      achievementDay: null,
      achievementUnit: 'Дня',
      isAchievementLiked: false,
      posts: null,
      isLiked: null,
      achievementUrl: null,
    }
  },
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

.like-btn {
  transition: color .1s;
}
</style>
