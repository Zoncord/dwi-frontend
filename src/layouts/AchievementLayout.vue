<template>
  <div class="achievement flex row justify-between q-mt-md">
    <nav class="achievement__navigation" :class="{
      'col-3': $q.screen.gt.sm,
      'pr-8': $q.screen.gt.sm,
      'q-mb-md': $q.screen.lt.md,
      'full-width':$q.screen.lt.md,
    }">
      <div class="q-card achievement__navigation__card-info flex column text-center q-mb-md">
        <div class="achievement__navigation__card-info__wrapper">
          <h5 class="achievement__navigation__card-info__title">{{ achievementTitle }}</h5>
          <h1 class="achievement__navigation__card-info__day">{{ achievementDay }}</h1>
          <h5 class="achievement__navigation__card-info__unit">{{ $tc('days', achievementDay) }}</h5>
        </div>
        <q-separator class="achievement__navigation__card-info__separator"/>
        <h6 class="achievement__navigation__card-info__description q-ma-sm">
          {{ achievementDescription }}
        </h6>
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
    <div class="achievement__blog column"
         :class="{
             'col-9': $q.screen.gt.sm,
             'pl-8': $q.screen.gt.sm,
        }"
    >
      <q-btn
        class="achievement__blog__create-post q-mb-md"
        @click="$router.push('/create-post/?achievement_id=' + this.$route.params.id)"
        no-caps
        v-if="isUserOwner"
        :ripple="false"
      >
        {{ $t('achievement.addNewPost') }}
        <q-icon name="add"/>
      </q-btn>
      <InfiniteScroll :on-load-request="getPosts">
        <AchievementPost
          v-for="post in posts"
          :key="post"
          :url="post.url"
          :ownerUrl="post.ownerUrl"
        />
      </InfiniteScroll>
    </div>
  </div>
</template>

<script>
import AchievementPost from "components/Acievement/AchievementPost/AchievementPost";
import InfiniteScroll from "components/Core/InfiniteScroll/InfiniteScroll";
import {mapGetters} from "vuex";


export default {
  name: "AchieveLayout",
  components: {
    InfiniteScroll,
    AchievementPost,
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
        this.achievementTitle = res.data.title
        this.achievementDay = res.data.days_since_the_last_incident
        this.achievementUrl = res.data.url
        this.achievementOwner = res.data.owners[0]
        this.achievementDescription = res.data.description
      })
    },
    handleAchievementLike() {
      this.isLiked = !this.isLiked
      if (this.isLiked) {
        this.$axios.post(this.$dwiApi + `rating/achievement/`, {
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
    async getPosts(index) {
      await this.$axios.get(this.$dwiApi + 'blog/post/', {
        headers: {
          Authorization: 'Token ' + this.token()
        },
        params: {
          achievement: this.$route.params.id,
          ordering: '-date_time_of_creation',
          page: index,
        }
      }).then(res => {
        for (let post of res.data.results) {
          this.posts.push({
            url: post.url,
            ownerUrl: post.author,
          })
        }
      })
    },
  },
  data() {
    this.getAchievementData()
    this.getIsLiked()
    return {
      achievementTitle: null,
      achievementDay: null,
      isAchievementLiked: false,
      posts: [],
      isLiked: null,
      achievementUrl: null,
      achievementOwner: null,
      achievementDescription: null,
    }
  },
  computed: {
    isUserOwner() {
      return this.achievementOwner === this.$userUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1024px){
  .achievement__blog{
    width: 100%;
  }
}
.achievement__navigation__controls {
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.achievement__navigation__card-info {
  border-radius: 10px;
}

.achievement__navigation__card-info__wrapper {
  padding: 30px;
  width: 100%;
  word-break: break-word;
}

.achievement__navigation__card-info__separator {
  width: 100%;

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

.achievement__navigation__card-info__description {
  font-weight: 400;
  word-break: break-word;
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

.like-btn {
  transition: color .1s;
}
</style>
