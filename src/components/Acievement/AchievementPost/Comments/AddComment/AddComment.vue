<template>
<div class="add-comment flex items-center">
  <UserImage class="add-comment__user-image" url=""/>
<!--  <q-input-->
<!--    autogrow-->
<!--    label="asddf"-->
<!--    -->
<!--    borderless-->
<!--    class="add-comment__input-wrapper"-->
<!--    input-class="add-comment__input-wrapper__input"-->
<!--    v-model="comment"-->
<!--    :model-value="comment"-->
<!--  />-->
<!--  <TitleInput v-model="comment" class="a"/>-->
  <CommentInput v-model="comment"></CommentInput>
  <q-btn
    class="add-comment__button"
    icon="send"
    :ripple="false"
  />
</div>
</template>

<script>

import UserImage from "components/Core/User/UserImage";
import CommentInput from "components/Core/Inputs/CommentInput";
export default {
  name: "AddComment",
  components: {
    CommentInput,
    UserImage,
  },
  data(){
    return {
      comment: '',
    }
  }

}
</script>

<style scoped>
a{
  flex-grow: 2;
}
.add-comment{
  width: 100%;
}
.add-comment__user-image{
  width: 50px;
}
.add-comment__input-wrapper{
  flex-grow: 2;
}
.add-comment__button{
  border: none !important;
}
</style>
