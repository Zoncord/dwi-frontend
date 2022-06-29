<template>
  <div class="comment-wrapper">
    <div class="comment  q-py-md q-px-lg">
      <router-link :to="'/profile/' + owner.id" class="comment__user-data flex items-end">
        <UserImage class="comment__user-data__user-image" :owner="owner"/>
        <UserName class="comment__user-data__user-name" :name="owner.generalInfo.name"/>
      </router-link>
      <DateComponent class="q-my-sm" :parent="comment"/>
      <EditableText
        v-model="commentText"
        class="comment__user-text"
        @finishEditing="changeComment"
        v-if="this.comment.owner=== this.$user.url"
      />
      <p
        class="comment__user-text"
        v-else
      >
        {{ commentText }}
      </p>
    </div>
    <q-separator/>
    <ContextMenu
      :parent="comment"
      @deleteComment="$emit('deleteComment')"
    />
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import UserName from "components/Core/User/UserName";
import DateComponent from "components/Core/DateComponent/DateComponent";
import ContextMenu from "components/Core/ContextMenu/ContextMenu";
import {mapGetters} from "vuex";
import EditableText from "components/Core/EditableText/EditableText";

export default {
  name: "CommentComponent",
  components: {
    UserImage,
    UserName,
    DateComponent,
    ContextMenu,
    EditableText,
  },
  props: {
    comment: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getOwnerData() {
      await this.$axios.get(this.comment.owner, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.owner = new this.$User(res.data)
      })
    },
    changeComment() {
      this.$axios.put(`${this.$dwiApi}blog/comment/${this.comment.id}`, {
        text: this.commentText,
        post: this.comment.post,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })
    }
  },
  data() {
    console.log()
    this.getOwnerData()
    return {
      owner: new this.$User({}),
      commentText: this.comment.text,
    }
  },
  watch: {
    commentMessage() {
      this.comment.changeText(this.commentText)
    },
  }
}
</script>

<style lang="scss" scoped>
.comment__user-text {
  white-space: pre-line;
}

.comment__user-data__user-image {
  width: 50px;
  margin-right: 7px;
}

.comment__user-data__user-name {
  font-size: 25px;
}
</style>
