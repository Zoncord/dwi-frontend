<template>
  <div class="achievement__blog__post q-card  q-mb-md">
    <h4 class="achievement__blog__post__title">{{ title }}</h4>
    <p class="achievement__blog__post__date">{{ date }} {{ $t('achievement.at') }} {{ time }}</p>
    <article class="achievement__blog__post__text">{{ description }}</article>
    <div class="flex justify-between">
      <div class="flex items-center">
        <UserImage
          class="achievement__blog__post__user-logo"
          :url="ownerImage"
        />
        <h4 class="achievement__blog__user-name">
          {{ ownerName }}
        </h4>
      </div>

      <nav class="achievement__blog__controls flex items-center ">
        <q-btn icon="chat" class="achievement__blog__controls__btn" :ripple="false"></q-btn>
        <q-btn
          icon="favorite"
          class="achievement__blog__controls__btn like-btn"
          :ripple="false"
          :class="{liked: isLiked}"
          @click="handleLiking()"
        />
        <h5 class="achievement__blog__controls__likes">
          {{ likesCount }} {{ likesUnit }}
        </h5>
      </nav>
    </div>
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import {mapGetters} from "vuex";

export default {
  name: "AchievementPost",
  components: {
    UserImage,
  },
  props: {
    url: {
      required: true,
    },
    ownerUrl: {
      required: true,
    },
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getUserData() {
      await this.$axios.get(this.ownerUrl, {
        headers: {
          Authorization: 'Token ' + this.token()
        }
      }).then(res => {
        this.ownerId = res.data.id
        this.ownerName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
        this.ownerImage = res.data.general_user_information.img
      })
    },
    async getPostData() {
      await this.$axios.get(this.url, {
        headers: {
          Authorization: 'Token ' + this.token()
        }
      }).then(res => {
        let creationDate = new Date(res.data.date_time_of_creation)
        this.id = res.data.id
        this.title = res.data.title
        this.date = creationDate.toLocaleDateString()
        this.time = creationDate.toLocaleTimeString()
        this.description = res.data.description
      })
    },
    async getLikesData() {
      //TODO change params in link to params in params everywhere
      await this.$axios.get(this.$dwiApi + `rating/post/?user=&post=${this.id}`, {
        headers: {
          Authorization: 'Token ' + this.token()
        }
      }).then(res => {
        this.likesCount = res.data.count
      })
    },
    async getIsLiked() {
      await this.$axios.get(this.$dwiApi + 'rating/post', {
        params: {
          post: this.id,
          user: this.$userId,
        },
        headers: {
          Authorization: 'Token ' + this.token()
        }
      }).then(res => {
        this.isLiked = Boolean(res.data.count)
      })
    },
    async handleLiking() {
      if (this.isLiked) {
        await this.$axios.get(this.$dwiApi + 'rating/post/', {
          params: {
            post: this.id,
            user: this.$userId,
          },
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then(async res => {
          console.log(res.data.results[0].url)
          await this.$axios.delete(res.data.results[0].url, {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
        })
        this.likesCount -= 1
      } else {
        await this.$axios.post(this.$dwiApi + 'rating/post/', {
            user: this.$userUrl,
            post: this.$dwiApi + `blog/post/${this.id}/` ,
          },
          {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
        this.likesCount += 1
      }
      this.isLiked = !this.isLiked
    }
  },
  async mounted() {
    await this.getUserData()
    await this.getPostData()
    await this.getLikesData()
    await this.getIsLiked()
  },
  data() {
    return {
      likesUnit: '',
      isLiked: null,
      likesCount: null,
      image: null,
      ownerName: null,
      ownerImage: null,
      ownerId: null,
      title: null,
      description: null,
    }
  }
}
</script>

<style lang="scss" scoped>


.achievement__blog__post {
  padding: 40px;
}

.achievement__blog__post__title {
  margin-bottom: 5px;
  font-weight: 500;
}

.achievement__blog__post__text {
  font-size: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.achievement__blog__user-name {
  font-weight: 400;
}

.achievement__blog__controls__btn {
  font-size: 20px;
  border: none;
  width: 50px;
}

.achievement__blog__controls__likes {
  font-weight: 400;
}

.achievement__blog__post__user-logo {
  width: 100px;
  margin-right: 20px;
}
</style>
