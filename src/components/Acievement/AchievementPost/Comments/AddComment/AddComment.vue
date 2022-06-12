<template>
  <div class="add-comment flex">
    <UserImage class="add-comment__user-image" :url="this.$userImage"/>
    <CommentInput
      class="q-mx-md"
      v-model="comment"
    />
    <q-btn
      class="add-comment__button"
      text-color="$border-color"
      :disable="
        !this.comment.split('\n').some((elem) => elem.split(' ').some((elem) => elem))
      "
      icon="send"
      :ripple="false"
      @click="sendComment"
    />
  </div>
</template>

<script>

import UserImage from "components/Core/User/UserImage";
import CommentInput from "components/Core/Inputs/CommentInput";
import {mapGetters} from "vuex";

export default {
  name: "AddComment",
  components: {
    CommentInput,
    UserImage,
  },
  props: {
    parentPost: {
      required: true,
    }
  },
  methods: {
    ...mapGetters("mainStore", ["token"]),
    sendComment(){
      console.log(this.parentPost, this.comment)
      this.$axios.post(`${this.$dwiApi}blog/comment/`, {
        text: this.comment,
        post: this.parentPost.url,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        console.log(res.data)
      }) .catch(function (error) {
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
    }
  },
  data() {
    return {
      comment: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.add-comment{
  flex-wrap: nowrap;
}
.add-comment__user-image {
  width: 50px;
  height: 32px;
}

.add-comment__button {
  min-height: auto;
  height: 32px;
  padding: 0;
  border: none !important;
  color: #989898;
}
</style>
