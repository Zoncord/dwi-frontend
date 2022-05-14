<template>
  <a :href="link">
    <q-card class="date-card card flex column justify-center items-center">
      <div class="date-card__container flex column justify-between items-center">
        <div class="flex column justify-center items-center" @click="$router.go('/profile/' + ownerId)">
          <UserImage class="date-card__user-image q-mb-sm" :url="ownerImage"/>
          <p class="date-card__user-name">{{ ownerName }}</p>
        </div>
        <div class="date-card__content flex column justify-between q-mt-md">
          <h5 class="title">
            {{ title }}
          </h5>
          <h1 class="days">
            {{ days }}
          </h1>
          <h5 class="days-unit">
            {{ daysUnit }}
          </h5>
        </div>
      </div>
    </q-card>
  </a>
</template>

<script>
import UserImage from "components/Core/User/UserImage";

export default {
  name: "DateCard",
  components: {
    UserImage,
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
    })
    return {
      ownerName: null,
      ownerImage: null,
      ownerId: null,
      title: null,
      days: null,
    }
  },
  computed: {
    daysUnit() {
      return this.$tc('days', this.days)
    }
  }
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

.date-card__content {
  height: 100%;

  * {
    font-weight: 500;
  }
}

.date-card__user-image {
  width: 60px;
}

.date-card__user-name {
  font-size: 20px;
}
</style>
