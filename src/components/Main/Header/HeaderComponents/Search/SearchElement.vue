<template>
  <div class="search-wrapper"
       @focusin="searchFocused = true"
       @focusout="searchFocused = false"
  >
    <q-input
      class="search"
      dense
      borderless
      v-model="query"
      :model-value="query"
      :placeholder="$t('header.search.label')"
      color="border-color" hide-bottom-space label-color="black"
      :style="{
        borderRadius: searchFocused  ? '5px 5px 0px 0px': '5px 5px 5px 5px'
      }"
    >
      <!--Search icon-->
      <template v-slot:prepend>
        <q-icon name="search"/>
      </template>
      <!--Clear Cross icon-->
      <template v-slot:append>
        <q-icon
          v-if="query !== ''"
          name="clear"
          class="cursor-pointer"
          @click="() => {
            this.query = ''
            this.achievements = []
          }"
        />
      </template>
    </q-input>
    <q-list
      dense
      bordered
      padding
      class="search__advice-list rounded-borders"
      :style="{
      border: searchFocused ? 'solid 1px #B8B8B8': 'none',
      transform: searchFocused? 'scaleY(1)' : 'scaleY(0)'
    }"

    >
      <div v-if="achievements.length !== 0">
        <div
          v-for="(resp, id) in achievements" :key="resp"

        >
          <SearchRecommendsElement
            v-if="id < 6"
            :url="resp.url"
          />
        </div>
      </div>
      <div class="flex justify-center q-my-md" v-else>
        <p>Ничего не найдено</p>
      </div>
    </q-list>

  </div>

</template>

<script>
import SearchRecommendsElement
  from "components/Main/Header/HeaderComponents/Search/Components/SearchRecommendationElement";
import {mapGetters} from "vuex";

export default {
  name: "Search",
  components: {
    SearchRecommendsElement,
  },
  mounted() {
    this.getAchievements()
  },
  data() {
    return {
      query: '',
      searchFocused: false,
      borderRadius: null,
      adviceListHeight: null,
      achievements: [],
    }
  },
  watch: {
    query() {
      this.getAchievements()
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    getAchievements() {
      this.$axios.get(`${this.$dwiApi}achievements/achievement/`, {
        params: {
          search: this.query,
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        this.achievements = []
        for (let result of res.data.results) {
          this.achievements.push({
            url: result.url,
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
.search-wrapper {
  position: relative;

  .q-field {
    .q-field__inner {

      .q-field__control {
        height: 30px !important;

        .q-field__prepend {
          height: 30px !important;
        }

        .q-field__append {
          height: 30px !important;
        }
      }
    }
  }
}

.search-recommendation__section {
  justify-content: space-between;
}
</style>

<style lang="scss" scoped>
.search__advice-list {
  position: absolute;
  z-index: 100;
  background-color: white;
  width: 100%;
  padding: 0;
  border-radius: 0 0 5px 5px;
  overflow: hidden;
  border-top: none !important;
  transition: transform .25s;
  transform-origin: top;
}

.search__advice-list__user-image {
  width: 32px;
}

.search {
  padding-left: 10px;
  padding-right: 10px;
  border: solid 1px $border-color;
  border-radius: 5px;

  &:hover {
    border-color: #939393;
  }

  &:focus-within {
    border-color: $border_color;
  }
}
</style>
