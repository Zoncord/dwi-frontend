<template>
  <div class="achievement__blog__post q-card q-mb-md">
    <div class="achievement__blog__post__to-achievement" v-if="toAchievement">
      <ToAchievement class="q-mx-lg" :achievement="achievement"/>
      <q-separator/>
    </div>
    <div class="q-mx-lg q-mt-md">
      <h4 class="achievement__blog__post__title" v-if="post.title">{{ post.title }}</h4>
      <q-skeleton width="200px" height="40px" class="achievement__blog__post__title-skeleton q-mb-md" v-else/>
      <DateComponent :parent="post"/>

      <article class="achievement__blog__post__text" v-if="post.description">{{ post.description }}</article>
      <RandomSkeletonDescription
        class="achievement__blog__post__text-skeleton q-my-xl"
        v-else
      />
      <div class="flex justify-between q-mb-md">
        <router-link class="flex items-center" :to="`/profile/${owner.id}`">
          <UserImage
            class="achievement__blog__post__user-logo"
            :owner="owner"
          />
          <UserName :name="owner.generalInfo.name"/>
        </router-link>

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
          <h5 class="achievement__blog__controls__likes" v-if="post.likes !== null">
            {{ post.likes }}
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
      <CommentsComponent :parent="post" ref="CommentComponent"/>
    </div>
    <q-separator/>
    <AddComment
      class="achievement__blog__post__add-comment q-mx-lg q-my-md"
      :parent-post="post"
      @addComment="addComment"
    />
    <ContextMenu
      v-if="owner.id === this.$user.id"
      :parent="post"
      @deletePost="$emit('deletePost')"
    />

  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import {mapGetters} from "vuex";
import ContextMenu from "components/Core/ContextMenu/ContextMenu";
import UserName from "components/Core/User/UserName";
import RandomSkeletonDescription from "components/Core/Skeleton/RandomSkeletonDescription";
import CommentsComponent from "components/Core/Achievement/AchievementPost/Comments/CommentsComponent";
import DateComponent from "components/Core/DateComponent/DateComponent";
import AddComment from "components/Core/Achievement/AchievementPost/Comments/AddComment/AddComment";
import ToAchievement from "components/Core/Achievement/AchievementPost/ToAchievement/ToAchievement";

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
    ToAchievement,
  },
  props: {
    toAchievement: {
      default: false,
    },
    post: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    addComment(comment){
      this.$refs.CommentComponent.addComment(comment)
    },
    async getUserData() {
      await this.$axios.get(this.post.owner, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.owner = new this.$User(res.data)
      })
    },

    async getAchievementData(){
      await this.$axios.get(this.post.achievement, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.achievement = new this.$Achievement(res.data)
      })
    },
    async getIsLiked() {
      await this.$axios.get(this.$dwiApi + 'rating/post', {
        params: {
          post: this.post.id,
          user: this.$user.id,
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.isLiked = Boolean(res.data.count)
      })
    },
    async handleLiking() {
      if (this.isLiked) {
        await this.$axios.get(this.$dwiApi + 'rating/post/', {
          params: {
            post: this.post.id,
            user: this.$user.id,
          },
          headers: {
            Authorization: `Token ${this.token()}`
          }
        }).then(async res => {
          await this.$axios.delete(res.data.results[0].url, {
            headers: {
              Authorization: `Token ${this.token()}`
            }
          })
        })
        this.post.decreaseLikes()
      } else {
        await this.$axios.post(this.$dwiApi + 'rating/post/', {
            user: this.$userUrl,
            post: this.post.url
          },
          {
            headers: {
              Authorization: `Token ${this.token()}`
            }
          })
        this.post.increaseLikes()
      }
      this.isLiked = !this.isLiked
    },
    toggleComments() {
      this.commentsActive = !this.commentsActive
    }
  },
  async mounted() {
    await this.getUserData()
    await this.getAchievementData()
    await this.getIsLiked()
  },
  data() {
    return {
      isLiked: false,
      owner: new this.$User({}),
      commentsActive: false,
      achievement: new this.$Achievement({}),
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
