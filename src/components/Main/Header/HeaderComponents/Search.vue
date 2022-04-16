<template>
  <div class="search-wrapper">
    <q-input class="search" outlined v-model="query" :model-value="query" :placeholder="$t('header.search.label')" dense
             color="g" hide-bottom-space label-color="black" @focusin="searchFocused = true" @focusout="searchFocused = fasle">
      <template v-slot:prepend>
        <q-icon name="search"/>
      </template>
      <template v-slot:append>
        <q-icon v-if="query !== ''" name="clear" class="cursor-pointer" @click="query = ''"/>
      </template>
      <q-menu>
        <q-list dense bordered padding class="rounded-borders search-recommends">
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>
              Item
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>

    </q-input>



  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "Search",
  data() {
    return {
      query: ref(''),
      searchFocused: false,
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.search-wrapper {
  //position: relative;
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
//.search-recommends{
//  position: absolute;
//  z-index: 10000;
//  background-color: white;
//}
//.q-list{
//  position: absolute;
//  z-index: 100;
//  width: 100%;
//  background-color: white;
//}
</style>
