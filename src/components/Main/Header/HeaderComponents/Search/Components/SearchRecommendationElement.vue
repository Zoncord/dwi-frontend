<template>
  <a :href="`/achievement/${id}`">
    <q-item clickable class="search-recommendation fit flex items-center">
      <q-item-section class="search-recommendation__section fit q-px-md">
        <div class="flex justify-between fit items-center">
          <div class="search-recommendation__section__content-wrapper">
            <p v-if="title" class="q-mr-sm">{{ title }}</p>
            <q-skeleton class="title-skeleton q-mr-sm" v-else/>
            <p class="q-mr-sm">{{ $t('header.search.already') }}</p>
            <p v-if="days !== null" class="q-mr-sm">{{ days }}</p>
            <q-skeleton class="days-skeleton q-mr-sm" width="40px" v-else/>
            <p>{{ $tc('days', days) }}</p>
          </div>

          <a :href="'profile/' + ownerId" class="flex items-center">
            <UserName class="q-mr-sm" :name="ownerName"/>
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
import UserName from "components/Core/User/UserName";

export default {
  name: "SearchRecommendsElement",
  components: {
    UserImage,
    UserName,
  },
  props: {
    url: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token'])
  },
  async mounted() {
    await this.$axios.get(this.url, {
      headers: {
        Authorization: 'Token ' + this.token()
      }
    }).then(res => {
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
.title-skeleton{
  width: 80px;
}
.days-skeleton{
  width: 15px;
}
.search-recommendation {
  border-bottom: solid 1px $border_color;
}
.search-recommendation__section__content-wrapper{

  *{
    vertical-align: middle;
    display: inline-block;
  }

}
.search__advice-list__user-image {
  width: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
