<template>
  <div class="comment-wrapper">
    <div class="comment  q-my-md q-mx-lg">
      <div class="comment__user-data flex items-end">
        <UserImage class="comment__user-data__user-image" :url="owner.generalInfo.image"/>
        <UserName class="comment__user-data__user-name" :name="owner.generalInfo.name"/>
      </div>
      <DateComponent class="q-my-sm" :parent="comment"/>
      <p class="comment__user-text">
        {{comment.text}}
      </p>
    </div>
    <q-separator/>
    <ContextMenu type="comment" parent-id=""/>
  </div>

</template>

<script>
import UserImage from "components/Core/User/UserImage";
import UserName from "components/Core/User/UserName";
import DateComponent from "components/Core/DateComponent/DateComponent";
import ContextMenu from "components/Core/ContextMenu/ContextMenu";
import {mapGetters} from "vuex";

export default {
  name: "CommentComponent",
  components: {
    UserImage,
    UserName,
    DateComponent,
    ContextMenu,
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
    }
  },
  data(){
    this.getOwnerData()
    console.log(this.comment.creationDateTime)
    return {
      owner: new this.$User({})
    }
  }
}
</script>

<style lang="scss" scoped>
.comment__user-data__user-image {
  width: 50px;
  margin-right: 7px;
}

.comment__user-data__user-name {
  font-size: 25px;
}
</style>
