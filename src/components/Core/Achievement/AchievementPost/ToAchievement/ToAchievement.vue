<template>
<div class="to-achievement">
  <q-btn
    class="to-achievement__btn"
    icon="keyboard_backspace"
    no-caps
    :to="`/achievement/${achievement.id}`"
    :label="$t('post.toAchievement')"
    :ripple="false"
  />
</div>
</template>

<script>
export default {
  name: "ToAchievement",
  props: {
    achievement: {
      required: true,
    }
  }
}
</script>

<style lang="scss">
.to-achievement__btn{
  border: none;
  font-weight: 400;
  padding: 0;
  width: 100%;
  .q-btn__content{
    justify-content: left;
  }
}
</style>
