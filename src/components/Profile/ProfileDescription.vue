<template>
  <q-card class="profile-description flex justify-between">
    <div class="profile-description__user-part">
      <div class="flex profile-description__user-part__container">
        <UserImage class="profile-description__user-part__user-image q-mx-lg q-my-md" :url="ownerImage"/>
        <div class="profile-description__user-part__user-container  flex column">

          <a href="https://zoncord.tech/accounts/profile"
             class="profile-description__user-part__user-name q-mt-md q-mb-sm"
             v-if="isUserPage">
            {{ ownerName }}
            <q-icon class="profile-description__user-part__user-name-edit edit-icon" name="create"/>
          </a>
          <p class="profile-description__user-part__user-name q-mt-md q-mb-sm" v-else>
            {{ ownerName }}
          </p>

          <EditableText
            class="profile-description__user-part__editable-text"
            v-if="isUserPage"
            v-model="ownerDescription"
            @finishEditing="changeDescription"
          />
          <p class="profile-description__user-part__text" v-else>
            {{ ownerDescription }}
          </p>

        </div>
      </div>
    </div>
    <q-separator vertical/>
    <div class="profile-description__subscribe-part flex justify-center items-center">
      <div class="flex column text-center">
        <h6 class="profile-description__subscribe-part__subscribe-amount" v-if="followersCount !== null">
          {{ followersCount }} {{ $tc('profile.followers', followersCount) }}
        </h6>
        <SubscribeButton
          v-if="!isUserPage && isSubscribed !== null"
          class="profile-description__subscribe-part__btn"
          :is-subscribed="isSubscribed"
          v-on:toggleSubscribe="toggleSubscribe"
        />
      </div>
    </div>
  </q-card>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import {mapGetters} from "vuex";
import SubscribeButton from "components/Core/SubscribeButton";
import EditableText from "components/Core/EditableText/EditableText";

export default {
  name: "ProfileDescription",
  components: {
    UserImage,
    SubscribeButton,
    EditableText,
  },
  props: {
    ownerUrl: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getIsSubscribed() {
      this.$axios.get(this.$dwiApi + `rating/user/?user=${this.$userId}&evaluated_user=${this.ownerId}`, {
        headers: {
          Authorization: 'Token ' + this.token()
        }
      }).then(res => {
        this.isSubscribed = Boolean(res.data.count)
      })
    },
    toggleSubscribe() {
      if (this.isSubscribed) {
        this.followersCount -= 1
      } else {
        this.followersCount += 1
      }
      this.isSubscribed = !this.isSubscribed
    },
    changeDescription() {
      console.log(this.ownerDescription)
      this.$axios.put(`${this.$dwiApi}users/user/${this.$userId}`, {
        description: this.ownerDescription,
        zoncord_access_token: this.token(),
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })  .then(res => {
        console.log(res)
      }).catch(function (error) {
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
      ownerName: null,
      ownerImage: null,
      ownerId: null,
      ownerDescription: null,
      followersCount: null,
      isSubscribed: null,
      isUserPage: this.$route.params.userId.toString() === this.$userId.toString(),
    }
  },
  watch: {
    ownerUrl() {
      if (this.ownerUrl) {
        this.$axios.get(this.ownerUrl, {
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then(res => {
          this.ownerName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
          this.ownerImage = res.data.general_user_information.img
          this.ownerId = res.data.id
          console.log(res.data.description)
          this.ownerDescription = res.data.description
          this.followersCount = res.data.followers_count
          this.getIsSubscribed()
        })
      }
    },

  }
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}

.profile-description {
  border-radius: 15px;
}

.profile-description__user-part__user-container {
  flex-grow: 1;
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

.edit-icon {
  opacity: 0;
  transition: opacity .3s;
}

.profile-description__user-part__user-name {
  font-size: 30px;
  font-weight: 500;

  .profile-description__user-part__user-name-edit {
    font-size: 20px;
  }

  &:hover .profile-description__user-part__user-name-edit {
    opacity: 1;
  }
}

.profile-description__user-part__text {
  font-size: 20px;

  .profile-description__user-part__text-edit {
    font-size: 15px;
  }

  &:hover .profile-description__user-part__text-edit {
    opacity: 1;
  }
}


</style>
<style lang="scss">
.profile-description__user-part__user-image {
  align-items: start;

  .q-img {
    width: 150px;
  }
}
</style>
