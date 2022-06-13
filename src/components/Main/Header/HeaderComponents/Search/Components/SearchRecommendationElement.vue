<template>
  <a :href="`/achievement/${achievement.id}`">
    <q-item clickable class="search-recommendation fit flex items-center">
      <q-item-section class="search-recommendation__section fit q-px-md">
        <div class="search-recommendation__section__content flex justify-between fit items-center ">
          <div class="search-recommendation__section__content__wrapper">
            <p v-if="achievement.title" class="search-recommendation__section__content__wrapper__title q-mr-sm">
              {{ achievement.title }}</p>
            <q-skeleton class="title-skeleton m-r" v-else/>
            <div class="search-recommendation__section__content__wrapper__title__days">
              <p class="m-r">{{ $t('header.search.already') }}</p>
              <p v-if="achievement.days !== null" class="m-r">{{ achievement.days }}</p>
              <q-skeleton class="days-skeleton m-r" width="40px" v-else/>
              <p>{{ $tc('days', achievement.days) }}</p>
            </div>
          </div>

          <a :href="`getUser${owner.id}`" class="search-recommendation__section__content__user-info flex items-center">
            <UserName
              class="q-mr-md"
              name-class="search-recommendation__section__content__user-info__username"
              :name="owner.generalInfo.name"
            />
            <UserImage class="search__advice-list__user-image" :owner="owner"/>
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
    achievement: {
      required: true,
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getUser() {
      this.$axios.get(this.achievement.owner, {
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.owner = new this.$User(res.data)
      })
    }
  },
  mounted() {
    this.getUser()
  },
  data() {
    return {
      owner: new this.$User({})
    }
  },
}
</script>

<style lang="scss" scoped>
@media(max-width: 500px) {
  .search-recommendation {
    flex-wrap: wrap !important;

  }
  .search-recommendation__section {
    flex-wrap: wrap !important;
  }
  .search-recommendation__section__content {
    flex-wrap: wrap !important;
    justify-content: center !important;

    .search-recommendation__section__content__user-info {
      flex-wrap: wrap !important;
    }
  }
  .search-recommendation__section__content__wrapper__title__days {
    //flex-basis: 100% !important;
    //display: contents;
  }
  .search-recommendation__section__content {
    flex-direction: column;
  }
  .search-recommendation__section__content__wrapper {
    flex-direction: column;
    margin-right: 0 !important;
  }
  .search-recommendation__section__content__wrapper__title {
    margin-right: 0 !important;
  }
}

.title-skeleton {
  width: 80px;
}

.days-skeleton {
  width: 15px;
}

.search-recommendation {
  border-bottom: solid 1px $border_color;
  flex-wrap: nowrap;
}

.search-recommendation__section {
  flex-wrap: nowrap;
}

.search-recommendation__section__content {
  flex-wrap: nowrap;

  .search-recommendation__section__content__user-info {
    flex-wrap: nowrap;
  }
}


.search-recommendation__section__content__wrapper {
  flex-wrap: nowrap;
  align-items: center;
  display: flex;
  margin-right: 40px;

  .search-recommendation__section__content__wrapper__title {
    word-break: break-word;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  * {
    vertical-align: middle;
    display: inline-block;
  }

}

.search__advice-list__user-image {
  width: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.m-r {
  margin-right: 3px;
}
</style>
<style lang="scss">
.search-recommendation__section__content__user-info__username {
  white-space: nowrap;
}
</style>
