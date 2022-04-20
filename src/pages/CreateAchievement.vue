<template>
  <div class="create-achievement">
    <HeaderComponent/>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel :name="0">
        <div class="text-h4 q-mb-md">Mails</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
      </q-tab-panel>

      <q-tab-panel :name="1">
        <div class="text-h4 q-mb-md">Alarms</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
      </q-tab-panel>

      <q-tab-panel :name="2">
        <div class="text-h4 q-mb-md">Movies</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem,
          quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In,
          libero.</p>
      </q-tab-panel>
    </q-tab-panels>
    <ProgressFormBar
      @nextStage="nextStage()"
      @previousStage="previousStage()"
      :active-stage="tab"
      :stages-count="stagesCount"
    />
  </div>
</template>

<script>
import HeaderComponent from "components/Main/Header/HeaderComponent";
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";

export default {
  name: "CreateCard",
  components: {
    HeaderComponent,
    ProgressFormBar,
  },
  data() {
    return {
      tab: 0,
      stagesCount: 3,
    }
  },
  methods: {
    nextStage() {
      if (this.tab < this.stagesCount)
      this.tab += 1
    },
    previousStage(){
      if(this.tab > 0){
        this.tab -= 1
      }

    }
  }
}
</script>

<style>
.create-achievement {
  height: 100vh;
  position: relative;
}

.progress-form-bar {
  position: fixed;
  bottom: 0;
}
</style>
