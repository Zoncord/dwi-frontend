<template>
  <router-link :to="`/achievement/${id}`">
    <q-item clickable class="search-recommendation fit flex items-center">
      <q-item-section class="search-recommendation__section fit q-px-md">
        <div class="flex justify-between fit items-center">
          <p>{{ title }} уже {{ days }} дней</p>
          <div class="flex items-center">
            <p class="q-mr-sm">{{ userName }}</p>
            <UserImage class="search__advice-list__user-image"/>
          </div>
        </div>
      </q-item-section>
    </q-item>
  </router-link>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import axios from "axios";

export default {
  name: "SearchRecommendsElement",
  components: {
    UserImage,
  },
  props: {
    title: {
      required: true
    },
    days: {
      required: true
    },
    ownerLink: {
      required: true,
    },
    id: {
      required: true,
    }
  },
  data(){
    if (this.ownerLink){
      axios.get(this.ownerLink).then(res => {
        console.log(res)
          this.userName = res.data.user_first_name + ' ' + res.data.user_last_name
        // TODO: user image link isn't in backend response
      })
    }
    return {
      userName: null,
      imageLink: null,
    }
  },
}
</script>

<style lang="scss" scoped>
a{
  color: black;
}
.search-recommendation {
  border-bottom: solid 1px $border_color;
}
</style>
