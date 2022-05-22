<template>
  <a :href="`/achievement/${id}`">
    <q-item clickable class="search-recommendation fit flex items-center">
      <q-item-section class="search-recommendation__section fit q-px-md">
        <div class="flex justify-between fit items-center">
          <p>{{ title }} {{ $t('header.search.already') }} {{ days }} {{ $tc('days', days) }}</p>
          <a :href="'profile/' + ownerId" class="flex items-center">
            <p class="q-mr-sm">{{ ownerName }}</p>
            <UserImage class="search__advice-list__user-image" :url="ownerImage"/>
          </a>
        </div>
      </q-item-section>
    </q-item>
  </a>
</template>

<script>
import UserImage from "components/Core/User/UserImage";
import {mapGetters} from "vuex";

export default {
  name: "SearchRecommendsElement",
  components: {
    UserImage,
  },
  props: {
    url: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token'])
  },
  async mounted(){
    await this.$axios.get(this.url,{
      headers: {
        Authorization: 'Token ' + this.token()
      }
    } ).then(res => {
      console.log(res.data)
      this.title = res.data.title
      this.id = res.data.id
      this.days = res.data.days_since_the_last_incident
      this.ownerUrl = res.data.owners[0]
    })
    await this.$axios.get(this.ownerUrl, {
      headers: {
        Authorization: 'Token ' + this.token()
      }
    }).then(res => {
      this.ownerName = res.data.general_user_information.first_name + ' ' + res.data.general_user_information.last_name
      this.ownerImage = res.data.general_user_information.img
      this.ownerId = res.data.id
    })
  },
  data() {
    return {
      id: null,
      title: null,
      days: null,
      ownerName: null,
      ownerImage: null,
      ownerId: null,
    }
  },
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}

.search-recommendation {
  border-bottom: solid 1px $border_color;
}
.search__advice-list__user-image{
  width: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
