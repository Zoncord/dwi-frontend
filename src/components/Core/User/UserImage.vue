<template>
  <div class="user-image-wrapper flex justify-center items-center">
    <q-img class="user-image" alt="User Image" :src="owner.generalInfo.image" spinner-size="0px" ratio="1" v-if="owner.generalInfo.image"/>
    <q-responsive class="user-image-wrapper__responsive" ratio="1" v-else>
      <q-skeleton class="user-image-wrapper__responsive__skeleton" type="QAvatar"/>
    </q-responsive>
  </div>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    owner: {
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.user-image {
  border-radius: 50%;
}

.user-image-wrapper__responsive {
  width: 100%;
  .user-image-wrapper__responsive__skeleton {
    width: 100%;
    height: 100%;
  }
}
</style>
