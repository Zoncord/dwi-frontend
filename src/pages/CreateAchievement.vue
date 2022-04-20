<template>
  <div class="create-achievement">
<!--    <HeaderComponent/>-->
    <q-form
      @validation-success="nextStage()"
      @submit.prevent=""
      class="flex column"
    >
      <q-tab-panels v-model="tab">
        <q-tab-panel :name="1" class="limiter">
            <q-input outlined v-model="text" borderless></q-input>
            <q-input type="textarea" outlined v-model="text"></q-input>
          <textarea name="asd" id="asd" cols="1" rows="1"></textarea>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut cupiditate inventore saepe ullam veniam. Accusantium, alias dolores explicabo laboriosam minima voluptas. Cum id ipsa iste labore magnam neque odio.</p>
        </q-tab-panel>

        <q-tab-panel :name="2">
          <div class="text-h4 q-mb-md">Alarms</div>
          <q-input
            v-model="text2"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          >
          </q-input>
        </q-tab-panel>

        <q-tab-panel :name="3">
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
<!--      <ProgressFormBar-->
<!--        @checkValidation="checkValidation()"-->
<!--        @previousStage="previousStage()"-->
<!--        :active-stage="tab"-->
<!--        :stages-count="stagesCount"-->
<!--      />-->
    </q-form>
  </div>


</template>

<script>
import HeaderComponent from "components/Main/Header/HeaderComponent";
import ProgressFormBar from "components/CreateAchievement/ProgressFormBar";

export default {
  name: "CreateCard",
  components: {
    // HeaderComponent,
    // ProgressFormBar,
  },
  data() {
    return {
      tab: 1,
      stagesCount: 3,
      isValid: false,
      text: '',
      text2: '',
    }
  },
  methods: {
    nextStage() {
      if (this.tab < this.stagesCount)
        this.tab += 1
      this.isValid = false
    },
    previousStage() {
      if (this.tab > 1) {
        this.tab -= 1
        console.log(this.tab)
      }
    },
    checkValidation() {
      // alert(this.isValid)
      // alert('asfd')
      if (this.isValid) {
        this.nextStage()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.limiter{
  flex-grow: 2;
}
</style>
<style>
.create-achievement {
  height: 100vh;
  position: relative;
}

/*.progress-form-bar {*/
/*  position: fixed;*/
/*  bottom: 0;*/
/*}*/

</style>
