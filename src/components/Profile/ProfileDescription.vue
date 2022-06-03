<template>
  <q-card
    class="profile-description flex justify-between items-center"
    :class="{
      'column': $q.screen.lt.md,
     }"
  >
    <div class="profile-description__user-part"
         :class="{
              'q-mb-lg': $q.screen.lt.md,
          }"
    >
      <div class="flex profile-description__user-part__container "
           :class="{
          'column': $q.screen.lt.md,
          'items-center': $q.screen.lt.md,
        }"
      >
        <UserImage class="profile-description__user-part__user-image q-mx-lg q-my-md" :url="ownerImage"/>
        <div class="profile-description__user-part__user-container  flex column"
             :class="{
                'items-center': $q.screen.lt.md,
                'text-center': $q.screen.lt.md,
                 'fit-width': $q.screen.lt.md,
             }"

        >
          <a href="https://zoncord.tech/accounts/profile"
             class="profile-description__user-part__user-name q-mt-md q-mb-sm flex items-center"
             v-if="isUserPage"
          >
            <UserName
              :class="{
                'q-mr-sm': $q.screen.gt.sm
              }"
              name-class="profile-description__user-part__user-name"
              :name="ownerName"
              skeleton-scale="1.5"
            />
            <q-icon
              class="profile-description__user-part__user-name-edit"
              :class="{
                'edit-icon-hover': $q.screen.gt.sm,
              }"
              name="create"
              v-if="ownerName"
            />
          </a>
          <UserName
            class="profile-description__user-part__user-name q-mt-md q-mb-sm"
            name-class="profile-description__user-part__user-name"
            :name="ownerName"
            skeleton-scale="1.5"
            v-else
          />
          <div
            :class="{'profile-description__user-part__wrapper-fit': $q.screen.lt.md}"
            v-if="ownerDescription !== null"
          >
            <EditableText
              class="profile-description__user-part__editable-text"
              input-class="profile-description__user-part__editable-text__input"
              v-if="isUserPage"
              v-model="ownerDescription"
              @finishEditing="changeDescription"
            />
            <p class="profile-description__user-part__text" v-else>
              {{ ownerDescription }}
            </p>
          </div>
          <RandomSkeletonDescription class="q-mt-md" word-height="15px" v-else/>
        </div>
      </div>
    </div>
    <q-separator
      :vertical="$q.screen.gt.md"
      :style="{
        'width': $q.screen.gt.md ? '1px': '100%'
      }"
    />
    <div class="profile-description__subscribe-part flex justify-center items-center" :style="{
        'width': $q.screen.gt.md ? null : '100%'
      }">
      <div class="flex column text-center">
        <h6 class="profile-description__subscribe-part__subscribe-amount flex items-center"
            :class="{'q-my-sm': $q.screen.lt.lg}">
          <span v-if="followersCount !== null" class="q-mr-sm">{{ followersCount }} </span>
          <q-skeleton width="60px" class="q-mr-sm" v-else/>
          {{ $tc('profile.followers', followersCount !== null ? followersCount : 0) }}
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
import UserName from "components/Core/User/UserName";
import RandomSkeletonDescription from "components/Core/Skeleton/RandomSkeletonDescription";

export default {
  name: "ProfileDescription",
  components: {
    UserImage,
    UserName,
    SubscribeButton,
    EditableText,
    RandomSkeletonDescription,
  },
  props: {
    ownerUrl: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getIsSubscribed() {
      this.$axios.get(this.$dwiApi + `rating/user/`, {
        params: {
          user: this.$userId,
          evaluated_user: this.ownerId,
        },
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
      this.$axios.put(`${this.$dwiApi}users/user/${this.$userId}/`, {
        description: this.ownerDescription,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })
    }
  },
  beforeUpdate() {
    this.isUserPage = this.$route.params.userId.toString() === this.$userId.toString()
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

.profile-description__user-part__wrapper-fit {
  width: 100%;
}

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

.edit-icon-hover {
  opacity: 0;
  transition: opacity .3s;
}


.profile-description__user-part__user-name {
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
@media (max-width: 1024px) {
  .profile-description__user-part__editable-text__input{
    text-align: center;
  }
}

.profile-description__user-part__user-image {
  align-items: start;
  width: 150px;

  .q-responsive {
    width: 150px;
  }
}

.profile-description__user-part__user-name {
  font-size: 30px;
  font-weight: 500;
}
</style>
