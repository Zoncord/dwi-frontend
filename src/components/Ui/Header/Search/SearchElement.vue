<template>
  <div class="search"

  >
    <div
      class="search__wrapper"
      @focusin="openSearch"
      @focusout="() => {
        closeSearch()
        removeHash()
      }"
    >
      <q-input
        class="search__wrapper__input"
        dense
        borderless
        v-model="query"
        :model-value="query"
        :placeholder="$t('header.search.label')"
        color="border-color" hide-bottom-space label-color="black"
        :style="{
        borderRadius: searchFocused  ? '5px 5px 0px 0px': '5px 5px 5px 5px'
      }"
        ref="searchInput"
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
              clearInput()
              focusInput()
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
        <AutoHeightScroll
          :on-load-request="getAchievements"
          ref="AutoHeightScroll"
          v-model="isLoading"
        >
          <template v-slot:up>
            <p
              class="q-py-md text-center"
              v-if="!isLoading && achievements.length === 0"
            >
              Ничего не найдено
            </p>
          </template>

          <SearchRecommendsElement
            v-for="achievement in achievements" :key="achievement"
            :achievement="achievement"
            @click="() => {
              closeSearch()
              clearInput()
            }"
          />
        </AutoHeightScroll>

      </q-list>

    </div>
  </div>

</template>

<script>
import SearchRecommendsElement
  from "components/Ui/Header/Search/SearchRecommendation/SearchRecommendationElement";
import {mapGetters} from "vuex";
import AutoHeightScroll from "components/Core/AutoHeightScroll/AutoHeightScroll";

export default {
  name: "Search",
  components: {
    SearchRecommendsElement,
    AutoHeightScroll,
  },
  props: {
    modelValue: {}
  },
  data() {
    // console.log(this.$route)
    return {
      query: '',
      searchFocused: false,
      borderRadius: null,
      adviceListHeight: null,
      achievements: [],
      isLoading: true,
    }
  },
  watch: {
    async query() {
      this.achievements = []
      await this.$refs.AutoHeightScroll.restart()
    },
    searchFocused() {
      this.$emit('update:modelValue', this.searchFocused)
    },
    '$route.hash': function () {
      if (!this.$route.hash) {
        this.closeSearch()
        this.blurInput()
      }
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    async getAchievements(index) {
      await this.$axios.get(`${this.$dwiApi}achievements/achievement/`, {
        params: {
          search: this.query,
          page: index,
        },
        headers: {
          Authorization: `Token ${this.token()}`
        }
      }).then(res => {
        // crutch that put away outsider information
        if (index === 1) {
          this.achievements = []
        }
        for (let result in res.data.results) {
          this.achievements.push(new this.$Achievement(res.data.results[result]))
        }
      })
    },
    clearInput() {
      this.query = ''
    },
    focusInput() {
      this.$refs.searchInput.focus()
    },
    blurInput(){
      this.$refs.searchInput.blur()
    },
    openSearch() {
      this.searchFocused = true
      this.$router.push({hash: '#searching'})
    },
    closeSearch() {
      this.searchFocused = false
    },
    removeHash() {
      this.$router.push({hash: ''})
      this.$refs.searchInput.blur()
    },
  },

}
</script>

<style lang="scss">

.search {
  position: relative;
  flex-grow: 1;
  height: 30px;

  .search__wrapper {
    position: absolute;
    width: 100%;
  }

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
  //position: absolute;
  z-index: 100;
  background-color: white;
  width: 100%;
  padding: 0;
  border-radius: 0 0 5px 5px;
  //overflow: hidden;
  border-top: none !important;
  transition: transform .25s;
  transform-origin: top;
}

.search__advice-list__user-image {
  width: 32px;
}

.search__wrapper__input {
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
