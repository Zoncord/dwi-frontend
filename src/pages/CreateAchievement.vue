<template>
  <div class="create-achievement">
    <HeaderComponent/>
    <q-form
      @validation-success="nextStage()"
      @submit.prevent=""
      class="flex column text-center"
    >
      <h5 class="create-achievement__title">{{ $t('createAchievement.title') }}</h5>
      <q-tab-panels v-model="tab">
        <q-tab-panel :name="1" class="limiter">
          <q-input
            outlined
            v-model="title"
            borderless
            :placeholder="$t('createAchievement.firstStage.title') + ' *'"
            maxlength="256"
            :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
            class="create-achievement__title-input"
            :model-value="title">
            <template v-slot:append>
              <p class="create-achievement__input-counter create-achievement__input">
                {{ 256 - title.length }}
              </p>
            </template>
          </q-input>
          <q-input
            type="textarea"
            class="create-achievement__description-input"
            outlined
            v-model="description"
            :model-value="description"
            autogrow
            maxlength="4096"
            :placeholder="$t('createAchievement.firstStage.description') + ' *'"
            :rules="[ val => val && val.length > 0 || $t('errors.inputs.emptyField')]"
          >
            <template v-slot:append class="create-achievement__input-counter create-achievement__input">
              <p class="create-achievement__input-counter">
                {{ 4096 - description.length }}
              </p>

            </template>
          </q-input>
        </q-tab-panel>

        <q-tab-panel :name="2" class="limiter">
<!--          <div class="">-->
            <q-input class="inline-block"></q-input>
            <q-input class="inline-block"></q-input>
<!--          </div>-->
        </q-tab-panel>
      </q-tab-panels>

      <ProgressFormBar
        @checkValidation="checkValidation()"
        @previousStage="previousStage()"
        :active-stage="tab"
        :stages-count="stagesCount"
      />
    </q-form>
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
      tab: 1,
      stagesCount: 3,
      isValid: false,
      title: '',
      description: '',
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
      }
    },
    checkValidation() {
      if (this.isValid) {
        this.nextStage()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.limiter {
  flex-grow: 2;
  margin-bottom: 85px;
}

</style>

<style lang="scss">
.create-achievement__title {
  margin-top: 60px;
  margin-bottom: 60px;
}

.create-achievement__title-input {
  margin-bottom: 20px;

  .q-field__control {
    height: 40px;
  }

  .q-field__append {
    height: 40px;
  }
}

.create-achievement__description-input {
  .q-field__control {
    min-height: 150px;
  }
}

.create-achievement {
  height: 100vh;
  position: relative;
}

.progress-form-bar {
  position: fixed;
  bottom: 0;
}

.create-achievement__input-counter {
  font-size: 15px !important;
}


</style>
