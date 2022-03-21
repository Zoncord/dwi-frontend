<template>
  <div class="nav_buttons flex justify-between" :style="this.menu ? menuStyles : null">
    <q-btn class="nav_buttons__login "
           :style="Object.assign(
             {},
           colors ? colors['login'] : this.styles[this.theme]['login'],
           menu ? menu['login'] : null
           )
    ">
      Log In
    </q-btn>
    <q-btn class="nav_buttons__registration"
           :style="Object.assign(
             {},
             colors ? colors['signup'] : this.styles[this.theme]['signup'],
             menu ? menu['signup'] : null
             )
    ">
      Sign Up
    </q-btn>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderNavButtons",
  props: {
    colors: {
      default: null,
    },
    menu: {
      default: false,
    }
  },
  computed: {
    ...mapGetters('HeaderStore', ['theme']),
  },
  data() {
    console.log(Object.assign({}, true ? null : {2: 1}, true ? {1: 2} : {2: 1}))
    console.log(this.menu)
    return {
      menuStyles: {
        width: '100%',
        'flex-direction': 'column-reverse',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-bottom': '20px',
      },
      styles: {
        light: {
          login: {
            'background-color': 'white',
            color: '#0b132b',
          },
          signup: {
            'background-color': '#0b132b',
            color: 'white',
          }
        },
        dark: {
          login: {
            'background-color': 'white',
            color: '#0b132b',
          },
          signup: {
            'background-color': '#9DACFFFF',
            color: 'white',
          }
        }
      },
    }
  },

}
</script>

<style lang="scss" scoped>
.nav_buttons__login{
  margin-right: 10px;
}

.q-btn {
  transition: 1s;
  //width: 48%;
  border-radius: 10px;
  font-size: 12px;
}
</style>
