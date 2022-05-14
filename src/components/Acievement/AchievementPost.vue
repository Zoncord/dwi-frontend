<template>
  <div class="achievement__blog__post q-card  q-mb-md">
    <h4 class="achievement__blog__post__title">{{ title }}</h4>
    <p class="achievement__blog__post__date">{{ date }} {{ $t('achievement.at') }} {{ time }}</p>
    <article class="achievement__blog__post__text">{{ text }}</article>
    <div class=" flex justify-between">
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
          @click="isLiked = !isLiked"
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

export default {
  name: "AchievementPost",
  components: {
    UserImage,
  },
  props: {
    title: {
      required: true
    },
    creationTime: {
      required: true,
    },
    text: {
      required: true,
    },
    ownerLink: {
      required: true,
    },
    liked: {
      required: true,
    },
    likesCount: {
      required: true,
    },
  },

  data() {
    this.$axios.get(this.ownerLink).then(res => {
      console.log(res.data)
      this.ownerName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      this.ownerImage = res.data.general_user_information.image
    })
    let creationDate = new Date(this.creationTime)
    return {
      likesUnit: '',
      isLiked: this.liked,
      image: null,
      ownerName: null,
      ownerImage: null,
      time: creationDate.toLocaleTimeString(),
      date: creationDate.toLocaleDateString()
    }
  },
  watch: {
    isLiked(){
      console.log(this.isLiked)
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
