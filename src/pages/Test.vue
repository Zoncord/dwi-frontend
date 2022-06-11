<template>
  <UI :footer="false">
    <ProgressForm
      v-model="activeTab"
      :stages-count="5"
    >
      <template v-slot:Stage1>
        <h1>Заголовок статьи1</h1>
      </template>
      <template v-slot:Stage2>
        <h1>Заголовок статьи2</h1>
      </template>
      <template v-slot:Stage3>
        <h1>Заголовок статьи3</h1>
      </template>
      <template v-slot:Stage4>
        <h1>Заголовок статьи4</h1>
      </template>
      <template v-slot:Stage5>
        <h1>Заголовок статьи5</h1>
      </template>
    </ProgressForm>
  </UI>
</template>

<script>
import ProgressForm from "components/Core/Forms/ProgressForm/ProgressForm";
import UI from "components/Ui/UI";

export default {
  name: "Test",
  components: {
    ProgressForm,
    UI,
  },
  data() {
    return {
      activeTab: 1,
      title: '',
      description: '',
      category: '',
    }
  },
  watch: {
    a() {
      console.log(this.a)
    }

  }
}
</script>

<style scoped>
</style>
