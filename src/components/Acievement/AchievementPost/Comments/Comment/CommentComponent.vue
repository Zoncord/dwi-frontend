<template>
  <div class="comment-wrapper">
    <div class="comment  q-my-md q-mx-lg">
      <div class="comment__user-data flex items-end">
        <UserImage class="comment__user-data__user-image" url=""/>
        <UserName class="comment__user-data__user-name" name="User Name"/>
      </div>
      <DateComponent class="q-my-sm" full-date="2022-06-03T14:18:42.696283"></DateComponent>
      <p class="comment__user-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus esse facere labore officia quia sequi
        soluta.
        Accusantium animi commodi corporis dignissimos doloremque dolorum exercitationem laudantium non rerum, totam,
        unde, veniam!
      </p>
    </div>
    <q-separator/>
  </div>

</template>

<script>
import UserImage from "components/Core/User/UserImage";
import UserName from "components/Core/User/UserName";
import DateComponent from "components/Core/DateComponent/DateComponent";

export default {
  name: "CommentComponent",
  components: {
    UserImage,
    UserName,
    DateComponent,
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
