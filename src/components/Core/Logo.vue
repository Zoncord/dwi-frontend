<template>

  <div v-if="link" @click="$router.push('/')"
     class="logo link-logo text-center flex items-center justify-center"
     :class="additionalClasses ? additionalClasses: null"
     :style="logoColor ?  logoColor : null"
  >
    <slot/>
  </div>
  <div v-else
       class="logo text-center flex items-center justify-center"
       :class="additionalClasses ? additionalClasses: null"
       :style="logoColor ?  logoColor : null"
  >
    <slot/>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Logo",
  props: {
    color: {
      default: null,
    },
    link: {
      default: false,
    }
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme']),
  },
  data() {
    let additionalClasses, logoColor
    if (this.color.includes('#')) {
      logoColor = this.color
    } else {
      additionalClasses = [
        `text-${this.color}`,
      ]
    }
    return {
      additionalClasses: additionalClasses,
      logoColor: logoColor,
    }
  },

}
</script>

<style lang="scss" scoped>
.logo {
  font-family: Rounds, Roboto, sans-serif;
  font-weight: 700;
  font-size: calc(13px + 0.7vw);
  vertical-align: middle;
}

p {
  display: block;
}
.link-logo{
  cursor: pointer;
}
</style>
