<template>
  <q-card class="profile-description flex justify-between">
    <div class="profile-description__user-part flex justify-center items-center">
      <div class="flex profile-description__user-part__container">
        <UserImage class="profile-description__user-part__user-image q-mx-lg q-my-md"/>
        <div class="profile-description__user-part__user-container  flex column">

          <a href="https://www.google.com/" class="profile-description__user-part__user-name q-mt-md q-mb-sm" v-if="isUserPage">
            {{ ownerName }}
            <q-icon class="profile-description__user-part__user-name-edit edit-icon" name="create"/>
          </a>
          <p class="profile-description__user-part__user-name q-mt-md q-mb-sm" v-else>
            {{ ownerName }}
          </p>

          <a href="https://www.google.com/" class="profile-description__user-part__text" v-if="isUserPage">
            {{ profileDescription }}
            <q-icon class="profile-description__user-part__text-edit edit-icon" name="create"/>
          </a>
          <p class="profile-description__user-part__text" v-else>
            {{ profileDescription }}
          </p>
        </div>
      </div>
    </div>
    <q-separator vertical/>
    <div class="profile-description__subscribe-part flex justify-center items-center">
      <div class="flex column text-center">
        <h6 class="profile-description__subscribe-part__subscribe-amount">
          {{ subscribersAmount }} {{ subscribersUnit }} {{ $t('profile.followers') }}
        </h6>
        <q-btn class="profile-description__subscribe-part__btn" color="highlight" no-caps v-if="!isUserPage && !isSubscribed">
          {{ $t('profile.subscribeButton') }}
        </q-btn>
      </div>
    </div>
  </q-card>
</template>

<script>
import UserImage from "components/Core/User/UserImage";

export default {
  name: "ProfileDescription",
  components: {
    UserImage,
  },
  props: {
    isUserPage: {
      required: true,
    },
    isSubscribed: {
      required: true,
    },
  },
  data() {
    return {
      // subscribersAmount: '3',
      subscribersUnit: 'M',
      // profileDescription: 'Listen here little shit, my last name is Land Cruiser. And it\'s none of your fucking business why they call me that.',
    }
  },
  computed: {
    ownerName(){
      return this.$userName
    },
    profileDescription(){
      return this.$userDescription
    },
    subscribersAmount(){
      return this.$userSubsCount
    }
  }
}
</script>

<style lang="scss" scoped>
a{
  color: black;
}
.profile-description {
  border-radius: 15px;
}

.profile-description__user-part__user-container {
  flex-grow: 1;
}

.profile-description__user-part__user-image {
  width: 250px;
}

.profile-description__user-part {
  width: 80%;
}

.profile-description__subscribe-part {
  width: calc(20% - 1px);
}

.profile-description__user-part__container {
  flex-wrap: nowrap;
}
.edit-icon{
  opacity: 0;
  transition: opacity .3s;
}
.profile-description__user-part__user-name{
  font-size: 30px;
  font-weight: 500;
  .profile-description__user-part__user-name-edit{
    font-size: 20px;
  }
  &:hover .profile-description__user-part__user-name-edit {
    opacity: 1;
  }
}
.profile-description__user-part__text {
  font-size: 20px;
  .profile-description__user-part__text-edit{
    font-size: 15px;
  }
  &:hover .profile-description__user-part__text-edit {
    opacity: 1;
  }
}


</style>
