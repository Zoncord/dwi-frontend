<template>
  <div class="user-entry flex items-center justify-center">
    <UserName class="user-entry__user-name" :name="userName"/>
    <UserImage class="user-entry__user-image" :url="this.$userImage"/>
    <UserMenu :user-name="userName"></UserMenu>
  </div>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import UserMenu from "components/Main/Header/HeaderComponents/UserEntry/Components/UserMenu/UserMenu";
import UserName from "components/Core/User/UserName";
export default {
  name: "UserEntry",
  components: {
    UserImage,
    UserMenu,
    UserName,
  },
  computed: {
    userName(){
      return this.$userName
    }
  }
}
</script>

<style scoped>
.user-entry__user-name {
  margin-right: 10px;
  font-size: 17px;
}

.user-entry {
  cursor: pointer;
}

.user-entry__user-image {
  width: 40px;
}
</style>
<style lang="scss">
.q-focus-helper {
  display: none;
}

.q-item {
  &:hover {
    color: $highlight;
  }

  padding: 0;
}


.user-entry__copyright {
  display: block;
}

.user-entry__content-separator {
  width: 100%;
}

.user-entry__menu__user-information {
  height: 80px;
}
</style>
