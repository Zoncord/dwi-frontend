<template>
  <q-btn :color="color" no-caps @click="toggleSubscribe">
    {{ text }}
  </q-btn>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SubscribeButton",
  props: {
    isSubscribed: {
      required: true,
      default: null,
    }
  },
  watch: {
    isSubscribed() {
      this.changeText()
      this.changeColor()
    }
  },
  methods: {
    ...mapGetters('mainStore', ['token']),
    changeText() {
      this.text = this.isSubscribed ? this.$t('subscribeButton.unsubscribe') : this.$t('subscribeButton.subscribe')
    },
    changeColor() {
      this.color = this.isSubscribed ? 'grey' : 'highlight'
    },
    async toggleSubscribe() {
      if (this.isSubscribed) {
        await this.$axios.get(this.$dwiApi + `rating/user/?user=${this.$user.id}&evaluated_user=${this.$route.params.userId}`, {
          headers: {
            Authorization: 'Token ' + this.token()
          }
        }).then( async res => {
          await this.$axios.delete(res.data.results[0].url, {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
        })
      } else {
        await this.$axios.post(this.$dwiApi + 'rating/user/', {
            evaluated_user: this.$dwiApi + 'users/user/' + this.$route.params.userId + '/'
          },
          {
            headers: {
              Authorization: 'Token ' + this.token()
            }
          })
      }
      this.$emit('toggleSubscribe')
    }
  },
  mounted() {
    this.changeText()
    this.changeColor()
  },
  data() {
    return {
      text: null,
      color: null,
    }
  },
}
</script>

<style scoped>

</style>
