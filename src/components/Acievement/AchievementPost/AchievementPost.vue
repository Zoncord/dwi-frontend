<template>
  <div class="achievement__blog__post q-card  q-mb-md">
    <div class="q-mx-lg">
      <h4 class="achievement__blog__post__title" v-if="title">{{ title }}</h4>
      <q-skeleton width="200px" height="40px" class="achievement__blog__post__title-skeleton q-mb-md" v-else/>
      <DateComponent :full-date="creationDate"/>

      <article class="achievement__blog__post__text" v-if="description">{{ description }}</article>
      <RandomSkeletonDescription
        class="achievement__blog__post__text-skeleton q-my-xl"
        v-else
      />
      <div class="flex justify-between q-mb-md">
        <a class="flex items-center" :href="`/profile/${ownerId}`">
          <UserImage
            class="achievement__blog__post__user-logo"
            :url="ownerImage"
          />
          <UserName :name="ownerName"/>
        </a>

        <nav class="achievement__blog__controls flex items-center ">
          <q-btn
            icon="chat"
            class="achievement__blog__controls__btn"
            :text-color="commentsActive ? 'highlight' : null"
            :ripple="false"
            @click="toggleComments"
          />
          <q-btn
            icon="favorite"
            class="achievement__blog__controls__btn like-btn"
            :ripple="false"
            :class="{liked: this.isLiked}"
            @click="handleLiking()"
          />
          <h5 class="achievement__blog__controls__likes" v-if="likesCount !== null">
            {{ likesCount }}
          </h5>
          <q-skeleton width="40px" v-else/>
        </nav>
      </div>
    </div>
    <div
      class="achievement__blog__post__comments"
      :style="{
          'height': commentsActive ? '300px' : '0',
      }"
    >
      <q-separator/>
      <CommentsComponent/>
    </div>
    <q-separator/>
    <AddComment
      class="achievement__blog__post__add-comment q-mx-lg q-my-md"
    />
    <ContextMenu v-if="ownerId === this.$userId" type="post" :parent-id="id"/>

  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import {mapGetters} from "vuex";
import ContextMenu from "components/Core/ContextMenu";
import UserName from "components/Core/User/UserName";
import RandomSkeletonDescription from "components/Core/Skeleton/RandomSkeletonDescription";
import CommentsComponent from "components/Acievement/AchievementPost/Comments/CommentsComponent";
import DateComponent from "components/Core/DateComponent/DateComponent";
import AddComment from "components/Acievement/AchievementPost/Comments/AddComment/AddComment";

export default {
  name: "AchievementPost",
  components: {
    UserImage,
    ContextMenu,
    UserName,
    RandomSkeletonDescription,
    CommentsComponent,
    DateComponent,
    AddComment,
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
        this.creationDate = new Date(res.data.date_time_of_creation)
        this.id = res.data.id
        this.title = res.data.title
        this.description = res.data.description
      })
    },
    async getLikesData() {
      await this.$axios.get(`${this.$dwiApi}rating/post/`, {
        params: {
          post: this.id
        },
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
            post: this.$dwiApi + `blog/post/${this.id}/`,
          },
          {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
        this.likesCount += 1
      }
      this.isLiked = !this.isLiked
    },
    toggleComments() {
      this.commentsActive = !this.commentsActive
      this.commentsFirstToggle = false
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
      isLiked: false,
      likesCount: null,
      image: null,
      ownerName: null,
      ownerImage: null,
      ownerId: null,
      title: null,
      description: null,
      id: null,
      commentsActive: false,
      creationDate: null,
      commentsFirstToggle: true,
      commentsDisplayed: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.achievement__blog__post__title-skeleton {
  border-radius: 5px !important;
}

.user-name {
  font-size: 25px;
}


.achievement__blog__post {
  padding-top: 20px;
  width: 100%;
}

.achievement__blog__post__title {
  margin-bottom: 5px;
  font-weight: 500;
  word-break: break-all;
}

.achievement__blog__post__text {
  font-size: 20px;
  margin-top: 60px;
  margin-bottom: 60px;
  white-space: pre-line;
  word-break: break-all;
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

.achievement__blog__post__comments {
  overflow: hidden;
  transition: all .25s;
  transform-origin: top;
  border-radius: 0 !important;
}


</style>
<style lang="scss">
.achievement__blog__post__add-comment {
  .add-comment__user-image{
    width: 32px;
  }

  .comment-input {
    flex-grow: 2;
    .q-field__inner{
      .q-field__control{
        min-height: 30px;
        .q-field__append{
          height: 32px;
        }
        .q-field__control-container{
          padding: 0 !important;
          .comment-input__input{
            min-height: 16px;
            padding-top: 7px;
            padding-bottom: 7px;
          }
        }
      }
    }
  }
}
</style>
