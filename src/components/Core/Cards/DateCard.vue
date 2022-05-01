<template>
  <q-card class="date-card card flex column justify-center items-center">
    <div class="date-card__container flex column justify-between items-center">
      <div class="flex column justify-center items-center">
        <UserImage class="date-card__user-image q-mb-sm"/>
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
</template>

<script>
import UserImage from "components/Core/User/UserImage";

export default {
  name: "DateCard",
  components: {
    UserImage,
  },
  props: {
    ownerName: {
      required: true,
    },
    title: {
      required: true,
    },
    days: {
      required: true,
    },
    daysUnit: {
      required: true,
    },
    userImage: {
      required: true,
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
.date-card__content{
  height: 100%;
  *{
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
