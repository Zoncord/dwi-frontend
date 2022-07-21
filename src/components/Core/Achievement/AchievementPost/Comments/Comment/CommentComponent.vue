<template>
  <div class="comment-wrapper">
    <div class="comment-wrapper__content flex justify-between q-py-md q-px-lg">
      <div class="comment-wrapper__content__comment">
        <div class="flex items-end">
          <router-link :to="'/profile/' + comment.owner.id" class="comment__user-data flex items-end">
            <UserImage class="comment__user-data__user-image" :owner="comment.owner"/>
            <UserName class="comment__user-data__user-name" :name="comment.owner.generalInfo.name"/>
          </router-link>
          <div class="reply_text_wrapper flex text-end" v-if="comment.parent && comment.parent.type === 'comment'">
            <p class="name_size q-mx-sm">to</p>
            <router-link :to="'/profile/' + comment.parent.owner.id" >
              <UserName font-size="25px" :name="comment.parent.owner.generalInfo.name"/>
            </router-link>
          </div>
        </div>


        <DateComponent class="q-my-sm" :parent="comment"/>
        <EditableText
          v-model="commentText"
          class="comment-wrapper__content__comment__user-text"
          @finishEditing="changeComment"
          v-if="this.comment.owner.url === this.$user.url"
        />
        <p
          class="comment-wrapper__content__comment__user-text"
          v-else
        >
          {{ commentText }}
        </p>
      </div>
      <nav class="comment-wrapper__content__navigation column justify-between items-end">
        <div class="comment-wrapper__content__navigation__btns flex">
          <q-icon
            name="reply"
            class="comment-wrapper__content__navigation__btns__btn"
            @click="reply"
          />
          <q-icon
            name="close"
            class="comment-wrapper__content__navigation__btns__btn"
            @click="deleteComment"
            v-if="comment.owner.url === this.$user.url"
          />
        </div>
      </nav>
    </div>

    <q-separator/>
    <ContextMenu
      ref="contextMenu"
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
    // async getOwnerData() {
    //   await this.$axios.get(this.comment.owner, {
    //     headers: {
    //       Authorization: `Token ${this.token()}`
    //     }
    //   }).then(res => {
    //     this.owner = new this.$User(res.data)
    //   })
    // },
    changeComment() {
      this.comment.changeBE()
    },
    reply() {
      this.$emit('reply', this.comment)
    },
    deleteComment() {
      this.comment.deleteBE()
      this.$emit('deleteComment', this.comment.id)
    }
  },
  data() {
    return {
      commentText: this.comment.text,
    }
  },
  watch: {
    commentText() {
      this.comment.changeText(this.commentText)
    },
  },
}
</script>

<style lang="scss" scoped>
.comment-wrapper__content {
  flex-wrap: nowrap;

  .comment-wrapper__content__comment {
    flex-grow: 1;

    .comment-wrapper__content__comment__user-text {
      white-space: pre-line;
    }
  }
}


.comment__user-data__user-image {
  width: 50px;
  margin-right: 7px;
}

.comment__user-data__user-name {
  font-size: 25px;
}

.comment-wrapper__content__navigation__btns {
  flex-wrap: nowrap;

  .comment-wrapper__content__navigation__btns__btn {
    font-size: 20px;
    cursor: pointer;

    &:hover {
      color: $highlight;
    }
  }
}
.name_size{
  font-size: 25px;
}
</style>
