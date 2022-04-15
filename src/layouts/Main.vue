<template>
  <q-layout>
    <header>
      <div class="limiter">
        <q-tabs
          v-model="tab"
          dense
          class=""
          active-color="additional"
          indicator-color="additional"
          align="justify"
          narrow-indicator
        >
          <Logo>DWI</Logo>

          <q-tab name="mails" label="Главная"/>
          <q-tab name="alarms" label="Лучшие"/>
          <q-input class="search" outlined v-model="query" :model-value="query" label="Поиск">
            <template v-slot:prepend>
              <q-icon name="search" color="black"></q-icon>
            </template>

          </q-input>
          <div class="flex items-center">
            <UserName/>
            <UserIcon></UserIcon>
            <q-menu>
              <q-list style="min-width: 100px">
                <div class="flex">
                  <UserIcon/>
                  <div class="">
                    <UserName/>
                  </div>
                </div>
                <q-item clickable v-close-popup>
                  <q-item-section>New tab</q-item-section>
                </q-item>

              </q-list>
            </q-menu>
          </div>
        </q-tabs>
      </div>
    </header>
    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="mails">
        <div class="text-h4 q-mb-md">Mails</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      </q-tab-panel>

      <q-tab-panel name="alarms">
        <div class="text-h4 q-mb-md">Alarms</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      </q-tab-panel>

      <q-tab-panel name="movies">
        <div class="text-h4 q-mb-md">Movies</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
      </q-tab-panel>
    </q-tab-panels>
  </q-layout>
</template>

<script>
import Logo from "components/Logo";
import {ref} from "vue";
import UserName from "components/UserName";
import UserIcon from "components/UserIcon";

export default {
  name: "Main",
  components: {
    Logo,
    UserName,
    UserIcon,
  },
  data() {
    return {
      tab: ref('mails'),
      query: '',
    }
  }

}
</script>

<style lang="scss">
header {
  height: 80px;
}

.limiter {
  //height: 100%;
  //height: 40px;
  //padding-top: 10px;
  //padding-bottom: 10px;
}

.logo {
  font-size: 30px !important;
}

.q-tabs {
  height: 100%;
}

.q-tab {
  padding: 0;

  * {
    font-size: 14px;
  }
}
.q-tab__indicator{
  height: 3px !important  ;
}

.search {
  flex-grow: 4;
}

.q-input {
  height: 20px;
}

</style>
