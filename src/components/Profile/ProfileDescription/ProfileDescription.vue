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
        <UserImage class="profile-description__user-part__user-image q-mx-lg q-my-md" :owner="owner"/>
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
              :name="owner.generalInfo.name"
              skeleton-scale="1.5"
            />
            <q-icon
              class="profile-description__user-part__user-name-edit"
              :class="{
                'edit-icon-hover': $q.screen.gt.sm,
              }"
              name="create"
              v-if="owner.generalInfo.name"
            />
          </a>
          <UserName
            class="profile-description__user-part__user-name q-mt-md q-mb-sm"
            name-class="profile-description__user-part__user-name"
            :name="owner.generalInfo.name"
            skeleton-scale="1.5"
            v-else
          />
          <div
            :class="{'profile-description__user-part__wrapper-fit': $q.screen.lt.md}"
            v-if="owner.description !== null"
          >
            <EditableText
              class="profile-description__user-part__editable-text"
              input-class="profile-description__user-part__editable-text__input"
              v-if="isUserPage"
              v-model="ownerDescription"
              @finishEditing="changeDescription"
              :class="{
                'mb10': $q.screen.gt.sm,
             }"
            />
            <p class="profile-description__user-part__text" v-else>
              {{ owner.description }}
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
          <span v-if="owner.followers !== null" class="q-mr-sm">{{ owner.followers }} </span>
          <q-skeleton width="60px" class="q-mr-sm" v-else/>
          {{ $tc('profile.followers', owner.followers !== null ? owner.followers : 0) }}
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
import SubscribeButton from "components/Profile/ProfileDescription/SubscribeButton/SubscribeButton";
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
    owner: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getIsSubscribed() {
      this.$axios.get(this.$dwiApi + `rating/user/`, {
        params: {
          user: this.$userId,
          evaluated_user: this.owner.id,
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
        this.owner.decreaseFollowers()
      } else {
        this.owner.increaseFollowers()
      }
      this.isSubscribed = !this.isSubscribed
    },
    changeDescription() {
      this.$axios.put(`${this.$dwiApi}users/user/${this.$user.id}/`, {
        description: this.owner.description,
      }, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      })
    }
  },
  beforeUpdate() {
    this.isUserPage = this.$route.params.userId.toString() === this.$user.id.toString()
  },
  data() {
    return {
      ownerDescription: this.owner.description,
      isSubscribed: null,
      isUserPage: this.$route.params.userId.toString() === this.$user.id.toString(),
    }
  },
  watch: {
    ownerDescription() {
      this.owner.changeDescription(this.ownerDescription)
    },
    owner() {
      this.ownerDescription = this.owner.description
      this.getIsSubscribed()
    },
  }
}
</script>

<style lang="scss" scoped>

.profile-description__user-part__wrapper-fit {
  width: 100%;
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

.profile-description__user-part__editable-text {
  word-break: break-word;
}


</style>
<style lang="scss">
@media (max-width: 1024px) {
  .profile-description__user-part__editable-text__input {
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
