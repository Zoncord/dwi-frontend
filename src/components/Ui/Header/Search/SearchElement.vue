<template>
  <div class="search-wrapper">
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
      @focusin="searchFocused = true"
    >
      <!--Search icon-->
      <template v-slot:prepend>
        <q-icon name="search"/>
      </template>
      <!--Clear Cross icon-->
      <template v-slot:append>
        <q-icon
          v-if="searchFocused && $q.screen.lt.md"
          name="expand_less"
          class="cursor-pointer"
          @click="() => {
            this.searchFocused = false
          }"
        />
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
          @click="searchFocused = false"
        />
      </AutoHeightScroll>

    </q-list>
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
  },

}
</script>

<style lang="scss">
.search__scroll-wrapper {
  height: 300px;
}

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
  //overflow: hidden;
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
