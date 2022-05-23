<template>
  <a :href="this.id !== null ? `/achievement/${this.id}` : '/404'">
    <q-card class="date-card card flex column justify-center items-center">
      <div class="date-card__container flex column justify-between items-center">
        <a :href="'/profile/' + ownerId"
           class="date-card__container__user-info flex column justify-center items-center">
          <UserImage class="date-card__user-image q-mb-md" :url="ownerImage"/>
          <UserName class="date-card__container__user-name" :name="ownerName"/>
        </a>
        <div class="date-card__container__content flex column justify-between items-center q-mt-md">
          <h5 class="title" v-if="title !== null">
            {{ title }}
          </h5>
          <q-skeleton width="150px" height="20px" class="q-mt-md" v-else/>
          <h1 class="days" v-if="days !== null">
            {{ days }}
          </h1>
          <q-skeleton width="60px" height="80px" v-else/>
          <h5 class="days-unit">
            {{ $tc('days', days !== null ? days : 5) }}
          </h5>
        </div>
      </div>
     <ContextMenu type="card" :parent-id="this.id" v-if="this.ownerId === this.$userId"/>
    </q-card>
  </a>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import ContextMenu from "components/Core/ContextMenu";
import UserName from "components/Core/User/UserName";
export default {
  name: "DateCard",
  components: {
    UserImage,
    UserName,
    ContextMenu,
  },
  props: {
    ownerUrl: {
      required: true,
    },
    url: {
      required: true,
    }
  },
  data() {
    this.$axios.get(this.ownerUrl).then(res => {
      this.ownerName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      this.ownerImage = res.data.general_user_information.img
      this.ownerId = res.data.id
    })
    this.$axios.get(this.url).then(res => {
      this.title = res.data.title
      this.days = res.data.days_since_the_last_incident
      this.id = res.data.id
    })
    return {
      ownerName: null,
      ownerImage: null,
      ownerId: null,
      title: null,
      days: null,
      id: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.date-card {
  max-width: 300px;
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
