<template>
  <div class="achievement flex row justify-between q-mt-md">
    <nav class="achievement__navigation col-3">
      <div class="q-card achievement__navigation__card-info flex column text-center q-mb-md">
        <h5 class="achievement__navigation__card-info__title">{{ achievementTitle }}</h5>
        <h1 class="achievement__navigation__card-info__day">{{ achievementDay }}</h1>
        <h5 class="achievement__navigation__card-info__unit">{{ $tc('days', achievementDay) }}</h5>
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
    <div class="achievement__blog col-9 flex column">
      <q-btn
        class="achievement__blog__create-post q-mb-md"
        @click="$router.push('/create-post/?achievement_id=' + this.$route.params.id)"
        no-caps
        v-if="isUserOwner"
      >
        Add New Post
        <q-icon name="add"/>
      </q-btn>
      <AchievementPost
        v-for="post in posts"
        :key="post"
        :url="post.url"
        :ownerUrl="post.author"
      />
    </div>
  </div>
</template>

<script>
import AchievementPost from "components/Acievement/AchievementPost";
import {mapGetters} from "vuex";
import Plus from "components/Core/Cards/Components/Plus";

export default {
  name: "AchieveLayout",
  components: {
    AchievementPost,
    // Plus,
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getIsLiked() {
      this.$axios.get(this.$dwiApi + `rating/achievement/`, {
        headers: {
          Authorization: 'Token ' + this.token()
        },
        params: {
          user: this.$userId,
          achievement: this.$route.params.id,
        }
      }).then(res => {
        this.isLiked = res.data.count
      }).catch(err => {
        console.log(err)
      })
    },
    getAchievementData() {

      this.$axios.get(this.$dwiApi + 'achievements/achievement/' + this.$route.params.id).then(res => {
        console.log(res)
        this.achievementTitle = res.data.title
        this.achievementDay = res.data.days_since_the_last_incident
        this.achievementUrl = res.data.url
        this.achievementOwner = res.data.owners[0]
      })
    },
    getAchievementPosts() {
      this.$axios.get(this.$dwiApi + 'blog/post/', {
        headers: {
          Authorization: 'Token ' + this.token()
        },
        params: {
          achievement: this.$route.params.id,
          ordering: '-date_time_of_creation'
        }
      }).then(res => {
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
        })
      } else {
        this.$axios.get(this.$dwiApi + `rating/achievement/?user=${this.$userId}&achievement=${this.$route.params.id}`, {
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then(likeIdResponse => {
          this.$axios.delete(likeIdResponse.data.results[0].url, {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
          //TODO redirect to 404 when error
        })
      }
    },
  },
  data() {
    this.getAchievementData()
    this.getAchievementPosts()
    this.getIsLiked()
    return {
      achievementTitle: null,
      achievementDay: null,
      isAchievementLiked: false,
      posts: null,
      isLiked: null,
      achievementUrl: null,
      achievementOwner: null,

    }
  },
  computed:{
    isUserOwner(){
      return this.achievementOwner === this.$userUrl
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

.like-btn {
  transition: color .1s;
}
</style>
