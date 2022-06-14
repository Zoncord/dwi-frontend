<template>
  <router-link :to="achievement.id !== null ? `/achievement/${achievement.id}` : null" class="date-card-wrapper">
    <q-card class="date-card card flex column justify-center items-center">
      <div class="date-card__container flex column justify-between items-center">
        <router-link :to="'/profile/' + owner.id"
           class="date-card__container__user-info flex column justify-center items-center">
          <UserImage class="date-card__user-image q-mb-md" :owner="owner"/>
          <UserName class="date-card__container__user-name" :name="owner.generalInfo.name"/>
        </router-link>
        <div class="date-card__container__content flex column justify-between items-center q-mt-md">
          <h5 class="title q-px-md" v-if="achievement.title  !== null">
            {{ achievement.title }}
          </h5>
          <q-skeleton width="150px" height="20px" class="q-mt-md" v-else/>
          <h1 class="days" v-if="achievement.days !== null">
            {{achievement.days }}
          </h1>
          <q-skeleton width="60px" height="80px" v-else/>
          <h5 class="days-unit">
            {{ $tc('days', achievement.days !== null ? achievement.days : 0) }}
          </h5>
        </div>
      </div>
      <ContextMenu
        v-if="this.owner.id === this.$user.id"
        :parent="achievement"
        @deleteAchievement="$emit('deleteAchievement')"
      />
    </q-card>
  </router-link>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import ContextMenu from "components/Core/ContextMenu/ContextMenu";
import UserName from "components/Core/User/UserName";

export default {
  name: "DateCard",
  components: {
    UserImage,
    UserName,
    ContextMenu,
  },
  props: {
    achievement: {
      required: true,
    }
  },
  data() {
    this.$axios.get(this.achievement.owner).then(res => {
      this.owner = new this.$User(res.data)
    })
    return {
      owner: new this.$User({})
    }
  },
}
</script>

<style lang="scss" scoped>
@media(max-width: 1024px) {
  .date-card-wrapper {
    width: 100%;
  }
}

.title {
  overflow-wrap: anywhere;
}

.date-card {
  width: 100%;
  height: 500px;
  font-size: 10px;
  color: black;
  text-align: center;
}

.date-card__container {
  height: 80%;
  flex-wrap: nowrap;

}

.date-card__container__content {
  height: 100%;

  * {
    font-weight: 500;
  }
}

.date-card__container__user-info {
  color: black;
}

.date-card__user-image {
  width: 60px;
}

.date-card__container__user-name {
  font-size: 20px;
}
</style>
