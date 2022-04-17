<template>
  <div class="search-wrapper"
       @focusin="searchFocused = true"
       @focusout="searchFocused = false"
  >
    <q-input class="search" borderless v-model="query" :model-value="query" :placeholder="$t('header.search.label')"
             dense
             color="border-color" hide-bottom-space label-color="black"
             :style="{borderRadius: searchFocused && responses.length ? '5px 5px 0px 0px': '5px 5px 5px 5px'}"
    >
      <template v-slot:prepend>
        <q-icon name="search"/>
      </template>
      <template v-slot:append>
        <q-icon v-if="query !== ''"
                name="clear"
                class="cursor-pointer"
                @click="() => {
                  this.query = ''
                  this.responses = []
                }"
        />
      </template>
    </q-input>
    <q-list
      dense
      bordered
      padding
      class="search__advice-list rounded-borders search-recommends"
      :style="{
      border: searchFocused && responses.length ? 'solid 1px #B8B8B8': 'none',
      transform: searchFocused? 'scaleY(1)' : 'scaleY(0)',
    }"
    >
      <div v-for="(resp, id) in responses" :key="resp">
        <q-item clickable class="fit flex items-center">
          <q-item-section class="fit q-px-md">
            <div class="flex justify-between fit items-center">
              <p>{{ resp.title }} уже {{ resp.data.days }} дней</p>
              <div class="flex items-center">
                <p class="q-mr-sm">{{ resp.owner }}</p>
                <UserImage class="search__advice-list__user-image"/>
              </div>
            </div>
          </q-item-section>
        </q-item>
        <q-separator v-if="id !== responses.length - 1"/>
      </div>
    </q-list>
  </div>

</template>

<script>
import {ref} from "vue";

import UserImage from "components/UserImage";
import axios from "axios";

export default {
  name: "Search",
  components: {
    UserImage,
  },
  mounted() {

    console.log()
  },
  data() {
    return {
      query: '',
      searchFocused: false,
      borderRadius: null,
      adviceListHeight: null,
      responses: [],
    }
  },
  watch: {
    query() {
      axios.get(' http://192.168.43.79:8000/api/days_without_incidents/days_without_incidents_page/', {
        params: {
          search: this.query
        }
      }).then((req) => {
        console.log(req.data)
        this.responses = req.data.results
      })
    }
  }
}
</script>

<style lang="scss">
.search-wrapper {
  position: relative;
}

.q-field__control {
  height: 30px !important;
}

.q-field__prepend {
  height: 30px !important;
}

.q-field__append {
  height: 30px !important;
}

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

.q-item__section {
  justify-content: space-between;
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
;
}
</style>
